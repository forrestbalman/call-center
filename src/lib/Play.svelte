<script>
	import {
		generateTechSupportGreeting,
		generateCustomerFeeling,
		generateCustomerGreeting,
		generateTechSupportFollowup,
		generateCustomerIssue,
		generateTechSupportResponse,
		generateThankYouResponse,
		generateDidntWorkResponse,
		generateSignOffResponse,
		generatePreResponse,
		generatePostDidntWorkResponse,
		generateAngryHangupResponse,
		generateCustomerTryingResponse
	} from '$lib/index.js';
	import { tick } from 'svelte';
	import { io } from 'socket.io-client';
	import { goto } from '$app/navigation';

	const socket = io();

	let step = 0;
	let countdown;
	let firstName = null;
	let firstNameSubmitted = false;
	let aboutFeeling, customerMood, issueType;
	let responseIndices = [];
	let messages = [];
	let phoneButtonClickable = false;
	let gettingACall = false;
	let listenerReady = true;
	let dontRetriggerListenerReady = false;
	let callerID = null;
	let customerAnger = 0;

	function generateRandomID() {
		return Math.floor(Math.random() * 1000000);
	}

	//for transitioning between conversations with customers
	function amIGettingACall() {
		//calls itself every second to check if a call is coming in
		setTimeout(() => {
			let random = Math.random();
			if (random < 0.15) {
				gettingACall = true;
				phoneButtonClickable = true;
				callerID = generateRandomID();
				//emits a phone call event to the server which should play a phone rining sound.
				socket.emit('phone call', {
					name: firstName,
					id: callerID
				});
			} else {
				amIGettingACall();
			}
		}, 1000);
	}

	//increments the step variable to continue the conversation
	function advanceConversation() {
		//sets gettingACall to false so the phone button stops vibrating
		if (gettingACall) {
			socket.emit('phone picked up', {
				name: firstName,
				id: callerID
			});
			gettingACall = false;
		}
		step++;
		switch (step) {
			case 1:
				getTechSupportGreeting();
				break;
			case 2:
				getCustomerMoodAndGreeting();
				break;
			case 3:
				getTechSupportFollowup();
				break;
			case 4:
				getCustomerIssue();
				break;
			case 5:
				getTechSupportResponse();
				break;
			case 6:
				determineIfResponseFixesIssue();
				break;
			case 7:
				getCustomerDidntWorkResponse();
				break;
			case 8:
				getCustomerThankYouResponse();
				break;
			case 9:
				getSignOffResponse();
				break;
			case 10:
				makeNewCall();
				break;
			default:
				break;
		}
	}

	//pushes messages to the message array for display on the screen
	function addMessage(content, sender) {
		// Generate a unique ID based on the current time
		const id = Date.now();
		messages.push({ content, sender, id });
		messages = messages;

		scrollToBottom(id);
	}

	//forces the screen to scroll to the bottom of the messages div
	function scrollToBottom(id) {
		//waits for the page to update using tick
		tick().then(() => {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}

	//stores the first name and starts the call sequence
	function submitFirstName() {
		firstName = firstName.trim();
		firstNameSubmitted = true;
		step = 0;
		amIGettingACall();
	}

	function generateRandomTimeout(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function getTechSupportGreeting() {
		phoneButtonClickable = false;
		const object = generateTechSupportGreeting();
		let techSupportGreeting = `${object.greeting} ${object.middle} ${object.closingQuestion.text}`;
		aboutFeeling = object.closingQuestion.aboutFeeling;
		setTimeout(
			() => {
				addMessage('...', 'techSupport');
				setTimeout(
					() => {
						messages.pop();
						addMessage(techSupportGreeting.replace('NAME_HERE', firstName), 'techSupport');
						phoneButtonClickable = true;
					},
					generateRandomTimeout(1500, 4000)
				);
			},
			generateRandomTimeout(750, 1500)
		);
	}

	function getCustomerMoodAndGreeting() {
		customerMood = generateCustomerFeeling();
		const object = generateCustomerGreeting(customerMood, aboutFeeling);
		phoneButtonClickable = false;
		setTimeout(
			() => {
				addMessage('...', 'customer');
				setTimeout(
					() => {
						messages.pop();
						addMessage(object.response.text, 'customer');
						socket.emit('customer voice line', generateRandomID());
						setTimeout(
							() => {
								advanceConversation();
							},
							generateRandomTimeout(1500, 4000)
						);
					},
					generateRandomTimeout(1500, 4000)
				);
			},
			generateRandomTimeout(750, 1500)
		);
	}

	function getTechSupportFollowup() {
		const object = generateTechSupportFollowup(customerMood);
		setTimeout(
			() => {
				addMessage('...', 'techSupport');
				setTimeout(
					() => {
						messages.pop();
						addMessage(object.response, 'techSupport');
						phoneButtonClickable = true;
					},
					generateRandomTimeout(1500, 4000)
				);
			},
			generateRandomTimeout(750, 1500)
		);
	}

	function getCustomerIssue() {
		const object = generateCustomerIssue();
		issueType = object.issueType;
		phoneButtonClickable = false;
		setTimeout(
			() => {
				addMessage('...', 'customer');
				setTimeout(
					() => {
						messages.pop();
						addMessage(object.issue, 'customer');
						socket.emit('customer voice line', generateRandomID());
						setTimeout(
							() => {
								advanceConversation();
							},
							generateRandomTimeout(1500, 4000)
						);
					},
					generateRandomTimeout(1500, 4000)
				);
			},
			generateRandomTimeout(750, 1500)
		);
	}

	function getTechSupportResponse() {
		const object = generateTechSupportResponse(issueType, responseIndices);
		responseIndices.push(object.index);
		setTimeout(
			() => {
				addMessage('...', 'techSupport');
				if (customerAnger > 0) {
				}
				setTimeout(
					() => {
						messages.pop();
						phoneButtonClickable = true;
						let message;
						if (customerAnger > 0) {
							message = generatePostDidntWorkResponse() + ' ' + object.response;
							addMessage(message, 'techSupport');
						} else {
							message = generatePreResponse() + ' ' + object.response;
							addMessage(message, 'techSupport');
						}
					},
					generateRandomTimeout(1500, 4000)
				);
			},
			generateRandomTimeout(750, 1500)
		);
	}

	function letCustomerGiveThatATry() {
		addMessage(generateCustomerTryingResponse(), 'customer');
	}

	function determineIfResponseFixesIssue() {
		phoneButtonClickable = false;
		setTimeout(() => {
			addMessage('...', 'customer');
			setTimeout(
				() => {
					messages.pop();
					letCustomerGiveThatATry();
					socket.emit('customer voice line', generateRandomID());
					const random = Math.random();
					setTimeout(
						() => {
							if (random <= 0.25) {
								step = 7;
								advanceConversation();
							} else {
								step = 6;
								advanceConversation();
							}
						},
						generateRandomTimeout(1500, 4000)
					);
				},
				generateRandomTimeout(1500, 4000)
			);
		});
	}

	function getCustomerThankYouResponse() {
		phoneButtonClickable = false;
		setTimeout(
			() => {
				addMessage('...', 'customer');
				setTimeout(() => {
					messages.pop();
					addMessage(generateThankYouResponse(), 'customer');
					socket.emit('customer voice line', generateRandomID());
					setTimeout(
						() => {
							advanceConversation();
						},
						generateRandomTimeout(1500, 4000)
					);
				});
			},
			generateRandomTimeout(750, 1500)
		);
	}

	function getCustomerDidntWorkResponse() {
		step = 4;
		//add a random number, 1 or 2 to customerAnger
		customerAnger += Math.floor(Math.random() * 2) + 1;
		setTimeout(
			() => {
				addMessage('...', 'customer');
				if (customerAnger >= 3) {
					messages.pop();
					addMessage(generateAngryHangupResponse(), 'customer');
					socket.emit('customer voice line', generateRandomID());
					phoneButtonClickable = false;
					setTimeout(
						() => {
							makeNewCall();
							socket.emit('angry customer', firstName);
						},
						generateRandomTimeout(1500, 4000)
					);
				} else {
					setTimeout(
						() => {
							messages.pop();
							addMessage(generateDidntWorkResponse(), 'customer');
							socket.emit('customer voice line', generateRandomID());
							phoneButtonClickable = false;
							setTimeout(
								() => {
									advanceConversation();
								},
								generateRandomTimeout(1500, 4000)
							);
						},
						generateRandomTimeout(1500, 4000)
					);
				}
			},
			generateRandomTimeout(750, 1500)
		);
	}

	function getSignOffResponse() {
		setTimeout(
			() => {
				addMessage('...', 'techSupport');
				setTimeout(
					() => {
						messages.pop();
						addMessage(generateSignOffResponse(), 'techSupport');
						phoneButtonClickable = true;
						socket.emit('happy customer', firstName);
					},
					generateRandomTimeout(1500, 4000)
				);
			},
			generateRandomTimeout(750, 1500)
		);
	}

	function makeNewCall() {
		step = 0;
		customerAnger = 0;
		responseIndices = [];
		messages = [];
		phoneButtonClickable = false;
		amIGettingACall();

		socket.emit('call ended', firstName);
	}

	socket.on('connect', () => {
		socket.emit('userRole', 'play');
		socket.emit('check for listener');
	});

	socket.on('listener connected', () => {
		if (!dontRetriggerListenerReady) {
			listenerReady = false;
			dontRetriggerListenerReady = true;

			setTimeout(() => {
				listenerReady = true;
			}, 10000);
		}
	});

	socket.on('counting down', (time) => {
		countdown = time;
	});

	socket.on('piece ended', () => {
		goto('/');
	});
</script>

{#if countdown}
	{#if countdown >= 10}
		<p class="text-light font-monospace fs-1 position-absolute bottom-0 start-0 m-3">
			0:{countdown}
		</p>
	{:else}
		<p class="text-light font-monospace fs-1 position-absolute bottom-0 start-0 m-3">
			0:0{countdown}
		</p>
	{/if}
{/if}
{#if !listenerReady}
	<div class="alert alert-info text-center p-3 position-absolute bottom-0 end-0 m-3" role="alert">
		A listener is connected. Wait for their okay before starting!
	</div>
{/if}
{#if !firstName || !firstNameSubmitted}
	<div
		class="min-vh-100 d-flex flex-column justify-content-center align-items-center gap-3 text-light"
	>
		<h2 class="display-2 text-center">What's your first name?</h2>
		<div class="d-flex gap-2">
			<input type="text" bind:value={firstName} class="form-control w-auto" />
			<button on:click={submitFirstName} class="btn btn-primary">Submit</button>
		</div>
	</div>
{:else}
	<div class="container min-vh-100 d-flex flex-column justify-content-center">
		<div class="messages w-100 d-flex flex-column my-5 overflow-y-auto">
			{#each messages as message, i}
				<div
					id={message.id}
					class="w-75 text-light p-2 rounded-3 mb-2 p-3 {message.sender === 'techSupport'
						? 'bg-success align-self-start'
						: 'bg-danger align-self-end'}"
				>
					<p class="m-0">{message.content}</p>
				</div>
			{/each}
		</div>
		<button
			class="btn btn-lg btn-light mb-3 {gettingACall ? 'vibrate' : ''}"
			on:click={advanceConversation}
			disabled={!phoneButtonClickable}
		>
			{#if phoneButtonClickable}
				☎
			{:else}
				<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
			{/if}
		</button>
	</div>
{/if}

<style>
	.alert-info {
		background-color: #93cbff;
		border: none;
	}

	.messages {
		height: 70vh;
		max-height: 70vh;
	}

	.vibrate {
		animation: vibrate 0.5s linear infinite;
	}

	@keyframes vibrate {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-2px, 2px);
		}
		40% {
			transform: translate(-2px, -2px);
		}
		60% {
			transform: translate(2px, 2px);
		}
		80% {
			transform: translate(2px, -2px);
		}
		100% {
			transform: translate(0);
		}
	}
</style>
