<script>
	import { io } from 'socket.io-client';
	import { goto } from '$app/navigation';

	const socket = io();

	let audioCtx;
	let messages = [];
	let allowSound = false;
	let sounds = [];
	let noise1Playing = false;
	let noise2Playing = false;
	let volumeScale = 1;
	let countdown;
	let totalUsers = 0;

	function generateRandomID() {
		return Math.floor(Math.random() * 1000000);
	}

	function startSound() {
		audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		allowSound = true;
		noise1Playing = true;
		noiseLoop();
		printerSounds();
		footstepSounds();
		typingSounds();
	}

	function noiseLoop() {
		let noise1 = new Audio('/sounds/noise.mp3');
		let noise2 = new Audio('/sounds/noise.mp3');

		noise1.volume = 0.35 * volumeScale;
		noise2.volume = 0.35 * volumeScale;

		noise1.play();

		//add an event listener to the audio element to check if the audio has ended
		noise1.addEventListener('ended', function () {
			noise1Playing = false;
			noise1.pause();
			noise1.currentTime = 0;
		});

		noise2.addEventListener('ended', function () {
			noise2Playing = false;
			noise2.pause();
			noise2.currentTime = 0;
		});

		noise1.addEventListener('timeupdate', function () {
			noise1.volume *= volumeScale;
			if (noise1.currentTime >= noise1.duration * 0.9 && !noise2Playing) {
				noise2.play();
				noise2Playing = true;
			}
		});

		noise2.addEventListener('timeupdate', function () {
			noise2.volume *= volumeScale;
			if (noise2.currentTime >= noise2.duration * 0.9 && !noise1Playing) {
				noise1.play();
				noise1Playing = true;
			}
		});
	}

	async function printerSounds() {
		let willPrinterMakeASound = Math.random();
		if (
			willPrinterMakeASound < 0.1 &&
			sounds.filter((sound) => sound.type === 'printer').length === 0
		) {
			let random = Math.floor(Math.random() * 4) + 1;

			let response = await fetch(`/sounds/printer-${random}.mp3`);
			let arrayBuffer = await response.arrayBuffer();
			let audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
			let panner = audioCtx.createStereoPanner();
			let gainNode = audioCtx.createGain();

			let printer = {
				source: audioCtx.createBufferSource(),
				type: 'printer',
				id: generateRandomID()
			};
			printer.source.buffer = audioBuffer;
			printer.source.connect(panner);

			panner.connect(gainNode);
			gainNode.connect(audioCtx.destination);

			sounds.push(printer);
			sounds = sounds;

			if (allowSound) {
				let audio = sounds.find((sound) => sound.id === printer.id);
				audio.source.start();

				panner.pan.value = Math.random() * 2 - 1;

				gainNode.gain.value = 0.03 * volumeScale;

				let updateVolumeInterval = setInterval(() => {
					gainNode.gain.value *= volumeScale;
				}, 100);

				audio.source.onended = function () {
					clearInterval(updateVolumeInterval); // stop updating the volume when the sound ends
					sounds = sounds.filter((sound) => sound.id !== printer.id);
					sounds = sounds;
				};
			}
		}
		setTimeout(printerSounds, 1000);
	}

	async function typingSounds() {
		let willKeyboardMakeASound = Math.random();
		if (
			willKeyboardMakeASound < 0.1 &&
			sounds.filter((sound) => sound.type === 'typing').length === 0
		) {
			let random = Math.floor(Math.random() * 4) + 1;

			let response = await fetch(`/sounds/typing-${random}.mp3`);
			let arrayBuffer = await response.arrayBuffer();
			let audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
			let panner = audioCtx.createStereoPanner();
			let gainNode = audioCtx.createGain();

			let keyboard = {
				source: audioCtx.createBufferSource(),
				type: 'typing',
				id: generateRandomID()
			};
			keyboard.source.buffer = audioBuffer;
			keyboard.source.connect(panner);

			panner.connect(gainNode);
			gainNode.connect(audioCtx.destination);

			sounds.push(keyboard);
			sounds = sounds;

			if (allowSound) {
				let audio = sounds.find((sound) => sound.id === keyboard.id);
				audio.source.start();

				panner.pan.value = Math.random() * 2 - 1;

				gainNode.gain.value = 0.1 * volumeScale;

				let updateVolumeInterval = setInterval(() => {
					gainNode.gain.value *= volumeScale;
				}, 100);

				audio.source.onended = function () {
					clearInterval(updateVolumeInterval); // stop updating the volume when the sound ends
					sounds = sounds.filter((sound) => sound.id !== keyboard.id);
					sounds = sounds;
				};
			}
		}
		setTimeout(typingSounds, 1000);
	}

	async function footstepSounds() {
		let willFootstepsMakeASound = Math.random();
		if (willFootstepsMakeASound < 0.5) {
			let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
			let panner = audioCtx.createStereoPanner();
			let gainNode = audioCtx.createGain(); // create a GainNode

			panner.connect(gainNode); // connect the panner to the gainNode
			gainNode.connect(audioCtx.destination); // connect the gainNode to the destination

			let response = await fetch('/sounds/footsteps.mp3');
			let arrayBuffer = await response.arrayBuffer();
			let audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

			let footsteps = {
				source: audioCtx.createBufferSource(),
				type: 'footsteps',
				id: generateRandomID()
			};
			footsteps.source.buffer = audioBuffer;
			footsteps.source.connect(panner);

			sounds.push(footsteps);
			sounds = sounds;

			if (allowSound) {
				let audio = sounds.find((sound) => sound.id === footsteps.id);
				audio.source.start();

				let duration = audioBuffer.duration;
				panner.pan.setValueAtTime(-1, audioCtx.currentTime); // start from left
				panner.pan.linearRampToValueAtTime(1, audioCtx.currentTime + duration); // pan to right over the duration of the sound

				gainNode.gain.value = 0.2 * volumeScale; // set the volume to 50%

				let updateVolumeInterval = setInterval(() => {
					gainNode.gain.value *= volumeScale;
				}, 100);

				audio.source.onended = function () {
					clearInterval(updateVolumeInterval); // stop updating the volume when the sound ends
					sounds = sounds.filter((sound) => sound.id !== footsteps.id);
					sounds = sounds;
				};
			}
		}
		setTimeout(footstepSounds, 5000);
	}

	function stopSound() {
		socket.emit('start countdown');
	}

	socket.on('connect', () => {
		socket.emit('userRole', 'listen');
	});

	socket.on('total users', (total) => {
		totalUsers = total;
	});

	socket.on('phone call', (object) => {
		let { name, id } = object;
		let message = `${name} is getting a call!`;
		messages.push({ id, message, socketId: socket.id });
		messages = messages;

		setTimeout(() => {
			messages = messages.filter((message) => message.id !== id);
			messages = messages;
		}, 4000);

		let ringtone = {
			sound: new Audio('https://www.soundjay.com/phone/sounds/telephone-ring-03a.mp3'),
			type: 'ringtone',
			id: id,
			socketId: socket.id
		};
		sounds.push(ringtone);
		sounds = sounds;

		if (allowSound) {
			let audio = sounds.find((sound) => sound.id === id);
			audio.sound.volume = 0.1 * volumeScale;
			audio.sound.play();
			//add an event listener to the audio element to check if the audio has ended
			audio.sound.addEventListener('ended', function () {
				sounds = sounds.filter((sound) => sound.id !== id);
				sounds = sounds;
			});
		}
	});

	socket.on('customer voice line', async (id) => {
		let random = Math.floor(Math.random() * 40) + 1;

		let gainNode = audioCtx.createGain();
		gainNode.connect(audioCtx.destination);

		let response = await fetch(`/sounds/voice-${random}.mp3`);
		let arrayBuffer = await response.arrayBuffer();
		let audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

		let voiceLine = {
			source: audioCtx.createBufferSource(),
			id: id,
			socketId: socket.id
		};
		voiceLine.source.buffer = audioBuffer;
		voiceLine.source.connect(gainNode);

		gainNode.gain.value = volumeScale;

		sounds.push(voiceLine);
		sounds = sounds;

		if (allowSound) {
			let audio = sounds.find((sound) => sound.id === id);
			audio.source.playbackRate.value = Math.random() * 0.3 + 0.8; // set a random playback rate between 80% and 110%
			audio.source.start();

			audio.source.onended = function () {
				sounds = sounds.filter((sound) => sound.id !== id);
				sounds = sounds;
			};
		}
	});

	socket.on('call ended', (name) => {
		let message = `${name} just helped another happy customer! 🎉`;
		let id = generateRandomID();
		messages.push({ id, message });
		messages = messages;

		setTimeout(() => {
			messages = messages.filter((message) => message.id !== id);
			messages = messages;
		}, 4000);
	});

	socket.on('angry customer', (name) => {
		let message = `Uh oh! ${name} couldn't help their customer!`;
		let id = generateRandomID();
		messages.push({ id, message });
		messages = messages;

		setTimeout(() => {
			messages = messages.filter((message) => message.id !== id);
			messages = messages;
		}, 4000);
	});

	socket.on('counting down', (time) => {
		countdown = time;
	});

	socket.on('piece ended', () => {
		audioCtx.close();
		goto('/');
	});
</script>

<div class="container min-vh-100">
	{#if !allowSound}
		<button
			class="btn btn-primary position-absolute top-50 start-50 translate-middle"
			on:click={startSound}>Play</button
		>
	{:else if !countdown}
		<button class="btn btn-danger position-absolute bottom-0 end-0 m-3" on:click={stopSound}
			>End</button
		>
	{/if}
	{#if countdown}
		{#if countdown >= 10}
			<p class="text-light font-monospace position-absolute top-0 end-0 m-3">0:{countdown}</p>
		{:else}
			<p class="text-light font-monospace position-absolute top-0 end-0 m-3">0:0{countdown}</p>
		{/if}
	{/if}

	<div class="position-absolute top-50 start-0 translate-middle-y ms-3">
		<p class="m-0 font-monospace text-light">Total users:</p>
		<p class="m-0 font-monospace text-light">{totalUsers}</p>
	</div>

	{#each messages as message, i}
		<div class="d-flex justify-content-center">
			<p class="lead text-light p-2 rounded-3">
				{message.message}
			</p>
		</div>
	{/each}
</div>
