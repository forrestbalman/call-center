const techSupportConversations = {
	techSupportIntroductions: {
		greetings: [
			'Good day,',
			'Hello,',
			'Hi there,',
			'Greetings,',
			'Hi,',
			'Good afternoon,',
			'Good morning,'
		],
		middle: [
			'thank you for contacting tech support. My name is NAME_HERE.',
			'thank you for calling our technical support. This is NAME_HERE speaking.',
			"thanks for reaching out to tech support. I'm NAME_HERE.",
			'thank you for calling tech assistance. My name is NAME_HERE.',
			'thank you for calling our tech support line. My name is NAME_HERE.',
			'thank you for calling our tech support department. This is NAME_HERE.',
			"you've reached tech support. My name is NAME_HERE.",
			'thank you for calling tech support. This is NAME_HERE.'
		],
		closingQuestions: [
			{ text: 'How can I assist you today?', aboutFeeling: false },
			{ text: 'How may I help you today?', aboutFeeling: false },
			{ text: 'How can I make your day better?', aboutFeeling: false },
			{ text: 'How are you feeling today?', aboutFeeling: true },
			{ text: 'What can I do for you today?', aboutFeeling: false },
			{ text: "How's your day going?", aboutFeeling: true },
			{ text: 'How can I assist you this lovely day?', aboutFeeling: false },
			{ text: 'How are you doing today?', aboutFeeling: true }
		]
	},
	customerResponses: {
		cheerful: [
			{ text: "I'm doing great!", aboutFeeling: true },
			{ text: "Fantastic! I hope you're having a wonderful day!", aboutFeeling: true },
			{ text: "I'm doing really well, thanks!", aboutFeeling: true },
			{ text: 'I appreciate your enthusiasm!', aboutFeeling: false },
			{ text: "I'm feeling awesome, thank you!", aboutFeeling: true },
			{ text: "Couldn't be better!", aboutFeeling: true },
			{ text: "I'm doing fantastic, thank you for asking!", aboutFeeling: true },
			{ text: 'Absolutely wonderful, thank you!', aboutFeeling: true },
			{ text: "Thanks for asking, I'm doing splendidly!", aboutFeeling: true },
			{ text: 'Doing fantastic, thanks for asking!', aboutFeeling: true },
			{ text: "I'm feeling really good today, thank you!", aboutFeeling: true },
			{ text: 'Ready to solve this issue!', aboutFeeling: false },
			{ text: "I'm feeling fantastic, how about you?", aboutFeeling: true },
			{
				text: "Thanks for asking! I'm feeling upbeat and ready to get this resolved!",
				aboutFeeling: true
			},
			{ text: 'Excited to get this sorted out!', aboutFeeling: false },
			{
				text: "Thanks for asking, I'm in a great mood and ready to tackle this!",
				aboutFeeling: true
			},
			{ text: 'Feeling awesome, and looking forward to your assistance!', aboutFeeling: true },
			{ text: "I'm doing splendidly, thanks for asking!", aboutFeeling: true },
			{ text: "I'm doing great, and looking forward to resolving this!", aboutFeeling: true },
			{ text: 'Ready to tackle any challenges!', aboutFeeling: false }
		],
		neutral: [
			{ text: "I'm doing fine, thanks.", aboutFeeling: true },
			{ text: "I'm alright, nothing out of the ordinary.", aboutFeeling: true },
			{ text: 'Doing okay, just dealing with this tech issue.', aboutFeeling: true },
			{ text: "I'm doing alright, just hoping to get this sorted.", aboutFeeling: true },
			{ text: 'Not bad, just a bit frustrated with this issue.', aboutFeeling: true },
			{ text: "I'm okay, just trying to figure out what's going on.", aboutFeeling: true },
			{ text: 'Doing fine, thanks for asking.', aboutFeeling: true },
			{ text: "I'm alright, just need some help with this tech problem.", aboutFeeling: true },
			{ text: 'Just need some assistance with this issue.', aboutFeeling: false },
			{ text: 'Not too bad, just dealing with this tech hiccup.', aboutFeeling: true },
			{ text: "I'm alright, just need some guidance to fix this.", aboutFeeling: true },
			{ text: 'Doing fine, just trying to troubleshoot this problem.', aboutFeeling: true },
			{ text: "I'm alright, just trying to find a solution to this issue.", aboutFeeling: true },
			{ text: 'Not bad, just need some help with this tech glitch.', aboutFeeling: true },
			{ text: "I'm okay, just looking for some support with this.", aboutFeeling: true },
			{ text: 'Just need to get this issue resolved.', aboutFeeling: false },
			{ text: 'Just looking for some answers.', aboutFeeling: false },
			{ text: 'Just need some troubleshooting advice.', aboutFeeling: false },
			{ text: 'Just dealing with this technical issue.', aboutFeeling: false },
			{ text: 'Just need some assistance to fix this.', aboutFeeling: false }
		],
		angry: [
			{ text: "I'm not happy at all with this situation!", aboutFeeling: true },
			{ text: "I'm pretty frustrated right now, to be honest.", aboutFeeling: true },
			{ text: "I'm angry that this issue is still happening!", aboutFeeling: true },
			{ text: 'This problem is really getting on my nerves!', aboutFeeling: true },
			{ text: "I'm fed up with dealing with this issue!", aboutFeeling: true },
			{ text: "I'm really irritated with this ongoing problem!", aboutFeeling: true },
			{ text: 'This is really annoying me, I need it fixed!', aboutFeeling: true },
			{ text: "I'm furious that this issue hasn't been resolved yet!", aboutFeeling: true },
			{ text: "I'm really upset about this tech problem!", aboutFeeling: false },
			{ text: 'This is really making me angry, I need help!', aboutFeeling: true },
			{ text: "I'm really mad that this issue keeps happening!", aboutFeeling: true },
			{ text: 'This situation is really ticking me off!', aboutFeeling: true },
			{ text: "I'm really annoyed that I have to deal with this!", aboutFeeling: true },
			{ text: "I'm really frustrated with this whole situation!", aboutFeeling: true },
			{ text: 'This issue is really testing my patience!', aboutFeeling: false },
			{ text: "I'm seriously annoyed with this ongoing problem!", aboutFeeling: true },
			{ text: "I'm really angry that this hasn't been fixed yet!", aboutFeeling: true },
			{ text: "I'm getting really upset dealing with this issue!", aboutFeeling: true },
			{ text: "I'm seriously fed up with this tech problem!", aboutFeeling: false },
			{ text: "I'm really irritated that this hasn't been resolved!", aboutFeeling: true }
		]
	},
	techSupportResponses: {
		cheerful: [
			"It's great to hear you're doing well! How can I assist you today?",
			"I'm delighted to help you! What seems to be the issue?",
			'Your positive energy is contagious! How can I help you?',
			"I'm thrilled to assist you today! What's going on?",
			'Your cheerful attitude brightens up the day! How can I assist you?',
			'Your positive vibe is refreshing! How may I assist you?',
			"I'm here with a smile to help you! What do you need assistance with?",
			'Your happiness is contagious! What tech issue can I help you with?',
			"I'm here to spread positivity and resolve your tech issues! How can I assist you?",
			'Your cheerful demeanor is appreciated! How can I make your day better?',
			"Your energy is infectious! Let's tackle your tech issue together!",
			'Your enthusiasm is welcomed! How can I assist you today?',
			"I'm here with a positive mindset to help you out! What's the problem?",
			'Your positivity is uplifting! How can I make your tech experience better?',
			"I'm here to brighten up your day and resolve your tech problems! How can I assist you?",
			"Your joy is palpable! Let's work together to solve your tech issue!",
			'Your cheerful attitude is appreciated! How can I make your tech experience smoother?',
			'Your happiness is contagious! What tech challenge can I help you overcome?',
			"I'm here to match your positive energy and resolve your tech issue! How can I assist you?",
			"Your positivity shines through! Let's tackle your tech issue together with a smile!"
		],
		neutral: [
			"I'm here to help. What can I assist you with?",
			"Let's see how we can solve your tech issue.",
			'How may I assist you today?',
			"What seems to be the problem? I'm here to help.",
			"I'm here to assist you with any tech-related concerns.",
			"Let's work together to resolve your tech issue.",
			"I'm ready to assist you. What's the matter?",
			'What tech issue can I help you with today?',
			"Let's tackle your tech problem head-on.",
			"I'm here to provide support. What can I do for you?",
			"I'm here to help you out. What's the problem?",
			'How can I assist you with your tech issue?',
			"Let's get to the bottom of your tech issue together.",
			"I'm here to assist you with any tech difficulties.",
			'How may I assist you in resolving your tech problem?',
			"What brings you to tech support today? I'm here to help.",
			"Let's work together to find a solution to your tech issue.",
			"I'm here to help you troubleshoot your tech problem.",
			'How can I assist you with your tech issue today?',
			"What tech issue are you experiencing? Let's find a solution."
		],
		angry: [
			"I understand you're frustrated. Let's work together to resolve this problem.",
			"I sense your anger. Let's address this issue and find a resolution.",
			"I'm here to assist you. How can we turn this situation around?",
			"I understand you're upset. Let's work together to find a solution.",
			"Let's tackle this issue head-on and find a resolution together.",
			"I sense your frustration. Let's work on resolving this issue together.",
			"I'm here to help you out. Let's work together to turn things around.",
			"It seems like you're upset. Let's work together to resolve the issue.",
			"I understand this situation is frustrating. Let's find a solution together.",
			"I'm here to assist you, even in challenging situations like this one.",
			"I sense your frustration. Let's work together to overcome this obstacle.",
			"I can sense your anger. Let's work together to find a solution.",
			"I understand this issue is frustrating. Let's work on resolving it together.",
			"I'm here to help you navigate through this tough situation.",
			"Let's work together to find a solution to this frustrating problem.",
			"I'm here to provide support and find a solution to this issue.",
			"I'm here to assist you in resolving this frustrating situation.",
			"I understand you're upset. Let's work together to make things right.",
			"Let's work together to address your concerns and find a resolution.",
			"I'm here to assist you and turn this situation around for the better."
		]
	},
	issues: {
		computer: [
			"My computer won't turn on.",
			'My computer is running very slow.',
			"I can't connect to the internet on my computer.",
			'My computer keeps freezing.',
			"I'm getting a blue screen error on my computer.",
			'My computer is overheating.',
			'My computer fan is very loud.',
			'My computer screen is flickering.',
			'My computer is not recognizing my USB drive.',
			"I can't install software on my computer.",
			'My computer shuts down unexpectedly.',
			"I can't hear any sound from my computer.",
			"My computer's battery won't charge.",
			'I forgot my computer password.',
			"My computer's keyboard isn't responding.",
			"I can't access certain websites on my computer.",
			'My computer is infected with a virus.',
			"I can't update my operating system.",
			"My computer's graphics card isn't working.",
			"My computer's hard drive is making noises.",
			"I can't connect my Bluetooth device to my computer.",
			"My computer's webcam isn't working.",
			"My computer's microphone isn't working.",
			"I can't print from my computer.",
			'My computer is stuck on the startup screen.',
			"My computer's Wi-Fi isn't working.",
			"I can't connect a second monitor to my computer.",
			"My computer's touchpad isn't working.",
			'I need help recovering deleted files from my computer.',
			'My computer is displaying strange characters.',
			"My computer's ports aren't working.",
			"My computer's case is damaged.",
			'My computer is overheating and shutting down.',
			"I can't access my email on my computer.",
			'My computer is running out of storage space.',
			"My computer's internet connection is unstable.",
			"I can't open certain applications on my computer.",
			'My computer is not recognizing my external hard drive.',
			"My computer's screen is cracked.",
			"I can't play videos on my computer.",
			"My computer's speaker is not working.",
			"My computer's battery drains too quickly.",
			'My computer is making a beeping sound.',
			"I can't connect my computer to the TV.",
			"My computer's network adapter isn't working.",
			"My computer's optical drive isn't working.",
			"I can't download files on my computer.",
			"My computer's resolution is not correct.",
			"I can't find my files on my computer.",
			"My computer's mouse isn't working."
		],
		printer: [
			"My printer isn't printing.",
			'The printer is showing a paper jam.',
			"I'm getting an ink error on my printer.",
			"The printer won't connect to my computer.",
			'My printer is printing blank pages.',
			"My printer's Wi-Fi isn't working.",
			"I can't scan documents with my printer.",
			"My printer's print quality is poor.",
			'My printer is printing very slowly.',
			'My printer is making strange noises.',
			"I can't install the printer driver.",
			'My printer is offline.',
			"My printer's touchscreen isn't responding.",
			"I can't print from my mobile device.",
			"My printer is out of paper but it's not.",
			'My printer is printing incorrect colors.',
			"My printer's paper tray is stuck.",
			"My printer is showing a 'low toner' message.",
			"I can't connect my printer to the network.",
			"My printer's fuser is faulty.",
			"I can't find my printer on the network.",
			'My printer is printing multiple pages instead of one.',
			"My printer's output tray is not functioning.",
			"My printer's duplex printing isn't working.",
			"I can't cancel a print job on my printer.",
			"My printer's power button isn't working.",
			'My printer is printing smudged pages.',
			"I can't align my printer's cartridges.",
			"My printer's firmware needs updating.",
			'My printer is overheating.',
			"My printer is displaying a 'cover open' error.",
			"My printer's ink cartridges are stuck.",
			"I can't replace the toner in my printer.",
			'My printer is printing blank lines.',
			"My printer's paper feed is not working.",
			"I can't set up my printer wirelessly.",
			"My printer's scanner isn't working.",
			'My printer is not recognized by my operating system.',
			"I can't find my printer's IP address.",
			"My printer's LCD screen is blank.",
			'My printer is constantly restarting.',
			"My printer's network settings are incorrect.",
			"I can't print envelopes on my printer.",
			'My printer is printing faded text.',
			"My printer's paper sensor is faulty.",
			"I can't install my printer on a new computer.",
			"My printer's paper tray won't open.",
			"My printer is showing an 'unknown error' message.",
			"I can't access my printer's settings.",
			'My printer is not printing double-sided.'
		],
		router: [
			"My router isn't connecting to the internet.",
			'The Wi-Fi signal is weak.',
			"I'm unable to log into my router.",
			'The router keeps disconnecting.',
			"My devices can't find the Wi-Fi network.",
			"My router's firmware needs updating.",
			"My router's lights are flashing.",
			"I can't connect new devices to my router.",
			"My router's password isn't working.",
			'My router is overheating.',
			"My router's network settings are incorrect.",
			"I can't access my router's admin page.",
			'My router is showing a red light.',
			'I need help setting up my new router.',
			"My router's Wi-Fi is not broadcasting.",
			"My router's Ethernet ports aren't working.",
			"I can't reset my router.",
			"My router's range extender isn't working.",
			'My router is interfering with other devices.',
			"I can't change my router's SSID.",
			"My router's guest network isn't working.",
			'I need help securing my router.',
			'My router is causing slow internet speeds.',
			"My router's VPN isn't working.",
			"I can't connect my printer to my router.",
			"My router's parental controls aren't working.",
			"I can't update my router's firmware.",
			"My router's IP address has changed.",
			"I can't set up port forwarding on my router.",
			"My router's firewall is blocking connections.",
			"I can't access certain websites through my router.",
			"My router's QoS settings aren't working.",
			"I can't connect to my router's 5GHz network.",
			'My router is dropping connections randomly.',
			"I can't find my router's MAC address.",
			"My router's DNS settings are incorrect.",
			"I can't disable my router's Wi-Fi.",
			"My router's signal is being blocked.",
			"I can't connect my smart home devices to my router.",
			"My router's Wi-Fi channels are congested.",
			"I can't connect to my router's web interface.",
			'My router is not assigning IP addresses.',
			"I can't bridge my router with another router.",
			"My router's NAT type is strict.",
			"I can't access my router remotely.",
			"My router's SSID isn't visible.",
			"I can't connect to my router's USB port.",
			"My router's DMZ settings aren't working.",
			"I can't configure my router for IPv6."
		],
		phone: [
			"My phone won't charge.",
			"I'm not receiving calls on my phone.",
			'My phone screen is cracked.',
			'The phone keeps rebooting by itself.',
			"I'm having trouble with the phone's touchscreen.",
			"My phone's camera isn't working.",
			"I can't connect my phone to Wi-Fi.",
			'My phone is overheating.',
			"My phone's battery drains too quickly.",
			"I can't hear any sound from my phone.",
			"My phone's microphone isn't working.",
			"I can't update my phone's software.",
			'My phone is running very slowly.',
			"I can't send text messages on my phone.",
			"My phone's Bluetooth isn't working.",
			"I can't access the internet on my phone.",
			"My phone's GPS isn't working.",
			"I can't install apps on my phone.",
			"My phone's storage is full.",
			"I can't unlock my phone.",
			"My phone's fingerprint sensor isn't working.",
			"I can't sync my phone with my computer.",
			"My phone's speakers are not working.",
			"I can't make calls on my phone.",
			"My phone's Wi-Fi keeps disconnecting.",
			"I can't connect my phone to my car.",
			"My phone's screen is unresponsive.",
			"I can't charge my phone wirelessly.",
			"My phone's camera is blurry.",
			"I can't backup my phone's data.",
			"My phone's SIM card isn't recognized.",
			"I can't access my email on my phone.",
			"My phone's apps are crashing.",
			"I can't connect my phone to a VPN.",
			"My phone's hotspot isn't working.",
			"I can't pair my phone with other devices.",
			"My phone's touch ID isn't working.",
			"I can't record videos on my phone.",
			"My phone's screen is flickering.",
			"I can't connect my phone to my TV.",
			"My phone's power button isn't working.",
			"I can't use mobile data on my phone.",
			"My phone's notifications aren't showing.",
			"I can't reset my phone to factory settings.",
			"My phone's voice assistant isn't working.",
			"I can't set up a new account on my phone.",
			"My phone's volume buttons aren't working.",
			"I can't transfer files from my phone.",
			"My phone's flashlight isn't working.",
			"I can't restore my phone from a backup."
		]
	},
	preResponses: [
		"Alright, let's see.",
		"Let's take a look.",
		"Okay, let's try this.",
		"Let's check it out.",
		"Alright, let's investigate.",
		"Let's see what we can do.",
		"Okay, let's troubleshoot.",
		"Not a problem, let's see.",
		"Alright, let's figure this out.",
		'Let me see what I can do.',
		"Let's see could be causing the issue."
	],
	postDidntWork: [
		"Alright, let's try something else.",
		"Let's try another solution.",
		"I'm sorry that didn't work. Let's try this.",
		"Okay, let's give this a shot.",
		"Let's try another approach.",
		"Alright, let's give something else a go.",
		"Sorry that didn't work. Let's give this a shot.",
		"Let's try a different method.",
		"Okay, let's try another solution.",
		"Let's see if this works instead.",
		"Alright, let's try another fix."
	],
	responses: {
		computer: [
			"Let's start by checking if your computer is properly plugged in. Have you checked the power connection?",
			'Have you tried restarting your computer to see if it improves performance?',
			"Please ensure your Wi-Fi is turned on and you're within range of the router. Have you checked your Wi-Fi settings?",
			"Let's try running a virus scan to check for any malware. Have you performed a virus scan recently?",
			'Make sure your computer is placed in a well-ventilated area to avoid overheating. Is there proper ventilation around your computer?',
			"Try cleaning your computer's fan to reduce noise. Have you cleaned the fan recently?",
			"Let's adjust the screen refresh rate to fix the flickering. Have you checked your display settings?",
			'Check if the USB drive is compatible with your computer. Have you tried using a different USB drive?',
			"Ensure that your computer meets the software's system requirements. Have you checked the software's requirements?",
			"Let's check for any overheating issues causing the shutdown. Have you noticed any overheating signs?",
			'Make sure your sound drivers are up to date. Have you updated your sound drivers?',
			'Try using a different power adapter to charge your battery. Have you tried using a different adapter?',
			'You can reset your password using a password reset disk or another admin account. Do you have a password reset disk?',
			'Ensure the keyboard is properly connected to your computer. Is your keyboard securely connected?',
			"Clear your browser's cache and cookies to resolve website access issues. Have you cleared your browser cache?",
			'Run a full system scan with your antivirus software. When was the last time you ran a full system scan?',
			'Make sure your operating system is compatible with the update. Have you checked your OS compatibility?',
			"Let's check if the graphics card is properly seated in the slot. Have you checked the graphics card connection?",
			'Backup your data and consider replacing the hard drive if the noises persist. Have you backed up your data recently?',
			'Ensure Bluetooth is enabled on both devices and they are in pairing mode. Have you enabled Bluetooth on both devices?',
			'Check if the webcam drivers are installed correctly. Are the webcam drivers installed properly?',
			'Make sure the microphone is not muted and the drivers are updated. Is your microphone unmuted?',
			'Ensure the printer is properly connected and installed. Is the printer connected correctly?',
			'Try booting your computer in Safe Mode to troubleshoot the startup issue. Have you tried booting in Safe Mode?',
			'Ensure your Wi-Fi drivers are up to date. Have you updated your Wi-Fi drivers?',
			'Make sure the second monitor is properly connected and configured. Is the second monitor connected correctly?',
			"Check if the touchpad is enabled in your computer's settings. Is your touchpad enabled?",
			'Use file recovery software to try and recover your deleted files. Have you tried file recovery software?',
			"Check your computer's language settings to fix the strange characters. Have you checked your language settings?",
			'Ensure the ports are clean and free of debris. Have you cleaned your ports?',
			'Make sure the cooling system is working properly to prevent overheating. Is your cooling system functioning properly?',
			'Check your email settings and make sure the account is set up correctly. Are your email settings configured correctly?',
			'Consider upgrading your storage or deleting unnecessary files. Have you considered upgrading your storage?',
			'Move closer to the router to improve the internet connection. Have you tried moving closer to the router?',
			"Check the application's compatibility with your operating system. Is the application compatible with your OS?",
			'Ensure the external hard drive is formatted correctly. Have you checked the external hard drive format?',
			'Ensure the audio drivers are installed and updated. Are your audio drivers updated?',
			'Reduce the number of running applications to save battery. Have you reduced the number of running applications?',
			'Check the motherboard for any loose connections causing the beeping sound. Have you checked for loose connections?',
			'Make sure the correct input source is selected on the TV. Is the correct input source selected on your TV?',
			'Reinstall the network adapter driver. Have you tried reinstalling the network adapter driver?',
			"Clean the optical drive's lens carefully. Have you cleaned the optical drive's lens?",
			'Check your internet settings and try downloading the files again. Have you checked your internet settings?',
			'Adjust the screen resolution in your display settings. Have you adjusted your screen resolution?',
			'Use the search function to locate your files. Have you tried using the search function?',
			'Try using a different mouse or check the mouse settings. Have you tried using a different mouse?'
		],
		printer: [
			'Is the printer properly connected to the power source?',
			'Have you checked the printer and removed any stuck paper carefully?',
			'Are the ink cartridges properly installed and do they have enough ink?',
			'Would you like to reinstall the printer drivers on your computer?',
			'Shall we run a printer nozzle check to see if the ink is flowing properly?',
			'Is the printer connected to the correct Wi-Fi network?',
			'Have you ensured the document is properly placed on the scanner bed?',
			'Would you like to try cleaning the print heads to improve print quality?',
			'Have you checked if the printer is set to the correct print mode?',
			'Is the printer placed on a stable surface to reduce noise?',
			"Would you like to download the latest driver from the printer manufacturer's website?",
			'Have you set the printer as the default printer on your computer?',
			'Would you like to try restarting the printer to resolve the touchscreen issue?',
			'Are your mobile device and printer on the same network?',
			"Have you checked the paper tray and ensured it's properly loaded?",
			'Would you like to try aligning the print heads to fix the color issue?',
			'Have you carefully opened the paper tray and removed any obstructions?',
			"Would you like to replace the toner cartridge if it's low or empty?",
			"Shall we use the printer's network setup wizard to reconnect to the network?",
			'Have you ensured the printer is properly connected to the network?',
			"Have you checked the print settings to ensure it's set to print one page at a time?",
			'Is the output tray properly attached to the printer?',
			'Have you checked the duplex settings in the printer driver?',
			'Would you like to use the printer control panel to cancel the print job?',
			'Have you checked the power connection and tried a different power outlet?',
			'Would you like to clean the printer rollers to fix smudged pages?',
			"Shall we follow the printer's manual to align the cartridges?",
			"Would you like to visit the manufacturer's website to update the firmware?",
			'Have you ensured the printer is not placed in a hot environment?',
			'Is the printer cover properly closed?',
			'Have you carefully removed the ink cartridges and checked for any damage?',
			'Shall we follow the printer manual to replace the toner correctly?',
			'Would you like to clean the print heads to fix blank lines?',
			'Have you checked the paper feed mechanism for any jams or issues?',
			'Would you like to follow the printer manual to set up wireless printing?',
			'Have you ensured the scanner drivers are installed correctly?',
			'Is the printer compatible with your operating system?',
			'Would you like to print a network configuration page to find the IP address?',
			'Have you checked the power connection and restarted the printer?',
			'Is the printer placed in a well-ventilated area?',
			'Shall we reset the network settings and try connecting again?',
			'Is the printer compatible with printing envelopes?',
			'Would you like to replace the toner or ink cartridge to fix faded text?',
			'Shall we clean the paper sensor with a soft cloth?',
			'Would you like to follow the setup guide to install the printer on a new computer?',
			'Have you checked the paper tray for any obstructions?',
			'Would you like to use the printer control panel to access the settings?',
			'Have you checked the duplex settings to enable double-sided printing?'
		],
		router: [
			'Have you tried restarting your router to see if it reconnects to the internet?',
			'Have you considered moving the router to a central location to improve signal strength?',
			'Are you using the default login credentials provided with your router?',
			'Would you like to update the router firmware to see if it resolves the issue?',
			'Is the Wi-Fi network hidden, and is the SSID broadcast enabled?',
			"Have you downloaded the latest firmware from the manufacturer's website?",
			"Do you understand the meaning of the flashing lights according to the router's manual?",
			'Have you checked if the new devices are compatible with your router?',
			"Would you like to reset the router's password to factory default settings?",
			'Is the router placed in a well-ventilated area to prevent overheating?',
			'Have you checked the network settings to ensure they are correct?',
			"Are you using the router's default IP address to access the admin page?",
			"Do you understand the red light error according to the router's manual?",
			'Have you followed the setup guide provided with your new router?',
			'Is the Wi-Fi broadcast enabled in the router settings?',
			'Have you checked the Ethernet cables to ensure they are properly connected?',
			'Have you tried pressing and holding the reset button on the router to reset it?',
			'Is the range extender within the range of the router?',
			"Have you considered changing the router's channel to avoid interference?",
			"Have you logged into the router's admin page to change the SSID?",
			'Have you enabled the guest network in the router settings?',
			'Have you changed the default admin password to secure your router?',
			'Have you reduced the number of connected devices to improve speed?',
			'Are the VPN settings configured correctly?',
			'Have you followed the printer manual to connect it to the router?',
			"Have you updated the router's firmware to fix parental control issues?",
			"Do you know how to update the router's firmware according to the manual?",
			"Are you using the router's default IP address to access the settings?",
			"Have you logged into the router's admin page to set up port forwarding?",
			"Have you adjusted the firewall settings in the router's admin page?",
			'Have you cleared the DNS cache on your computer?',
			"Have you logged into the router's admin page to adjust QoS settings?",
			'Have you tried changing the Wi-Fi channel to avoid interference?',
			"Have you logged into the router's admin page to find the MAC address?",
			"Have you adjusted the DNS settings to match your ISP's recommendations?",
			"Have you disabled the Wi-Fi from the router's admin page?",
			'Have you considered moving the router to a more central location to avoid signal blockage?',
			'Have you checked if the smart home devices are compatible with your router?',
			'Have you changed the Wi-Fi channel to reduce congestion?',
			'Are you using the default IP address to access the web interface?',
			'Is DHCP enabled to assign IP addresses?',
			"Are you following the router's manual to set up bridging?",
			"Have you logged into the router's admin page to change the NAT type?",
			'Have you enabled remote management in the router settings?',
			'Is the SSID broadcast enabled?',
			"Have you referred to the router's manual to find the USB port settings?",
			"Have you enabled the DMZ settings in the router's admin page?",
			'Have you checked if your ISP supports IPv6 and configured the settings accordingly?'
		],
		phone: [
			"I'm sorry to hear that. Have you tried using a different charger or cable?",
			'Can you ensure your phone is in an area with good network coverage?',
			'Can you try performing a factory reset?',
			'Have you cleaned the touchscreen with a soft cloth to improve responsiveness?',
			'Is the camera lens clean and free of obstructions?',
			'Are Wi-Fi and the phone within range of the router?',
			'Have you avoided using the phone while charging to prevent overheating?',
			'Have you closed unused apps to improve battery life?',
			'Is the volume turned up and the phone not in silent mode?',
			'Have you checked if the microphone is blocked or covered?',
			'Have you downloaded the latest software update for your phone?',
			'Have you cleared the cache to improve phone performance?',
			'Do you have a strong network signal on your phone?',
			'Have you tried turning Bluetooth off and on again to reset the connection?',
			"Have you checked your phone's APN settings for internet access?",
			'Is GPS enabled and does it have the necessary permissions?',
			'Do you have enough storage space for new apps?',
			"Have you tried resetting your phone's password using recovery options?",
			'Have you cleaned the fingerprint sensor with a soft cloth?',
			"Have you used the phone's sync settings to connect to your computer?",
			"Have you checked the speaker settings and made sure they're not muted?",
			'Do you have a strong signal to make calls?',
			'Have you forgotten the Wi-Fi network and reconnected to it?',
			'Are there any physical obstructions on the screen?',
			'Have you checked if the phone is compatible with wireless charging?',
			'Have you cleaned the camera lens to fix the blurry issue?',
			"Have you used the phone's settings to backup data to the cloud?",
			'Is the SIM card properly inserted?',
			'Have you checked your email account settings for any issues?',
			'Have you uninstalled and reinstalled the problematic apps?',
			'Have you ensured your VPN settings are correctly configured?',
			"Have you enabled the hotspot in the phone's settings?",
			'Have you forgotten and re-paired the Bluetooth devices?',
			'Have you checked the touch ID settings and reconfigured if necessary?',
			'Have you ensured the camera has the necessary permissions to record videos?',
			'Have you adjusted the screen brightness to reduce flickering?',
			'Have you used a compatible cable to connect your phone to the TV?',
			"Is mobile data enabled in the phone's settings?",
			'Have you checked the notification settings and made sure they are enabled?',
			"Have you referred to the phone's manual to perform a factory reset?",
			"Have you enabled the voice assistant in the phone's settings?",
			'Have you ensured the account is set up correctly and has the necessary permissions?',
			'Have you checked if the volume buttons are stuck or damaged?',
			'Have you used a compatible app to transfer files?',
			"Have you enabled the flashlight in the phone's settings?",
			"Have you followed the phone's manual to restore data from a backup?"
		]
	},
	didntWork: [
		"That didn't work.",
		"It's still not working.",
		"That didn't solve the issue.",
		"I'm still having the same problem.",
		"No change, it's still not working.",
		"It's still broken.",
		"That solution didn't fix it.",
		'The issue is still there.',
		"It's still not resolved.",
		"That didn't help.",
		'The problem persists.',
		"It's still the same issue.",
		"That didn't do anything.",
		"No luck, it's still not working.",
		"That didn't make a difference.",
		'The problem is still happening.',
		"It's still giving me trouble.",
		"That didn't change the situation.",
		'Still no success.',
		"It's still malfunctioning."
	],
	thankYou: [
		'It worked, thank you!',
		'That did the trick, thanks!',
		"It's fixed, thank you!",
		'It’s working now, thank you!',
		'Problem solved, thank you!',
		'That worked, thanks a lot!',
		'All set now, thank you!',
		'It’s resolved, thanks!',
		'That fixed it, thank you!',
		'It’s working perfectly now, thanks!',
		"Everything's working now, thank you!",
		'It’s all good, thanks!',
		'That sorted it out, thank you!',
		'It’s functioning now, thanks!',
		'Issue resolved, thank you!',
		'It’s fixed now, thanks a lot!',
		'All sorted, thank you!',
		'That did the job, thanks!',
		'It’s all working now, thank you!',
		'Thank you, it’s working fine now!'
	],
	signOff: [
		'If you have any other issues, feel free to reach out. Have a great day!',
		'Thank you for calling tech support. Have a wonderful day!',
		"Glad I could help. If you need anything else, don't hesitate to contact us. Take care!",
		'Thanks for choosing our service. Have a great day!',
		'It was my pleasure to assist you. Have a fantastic day!',
		"If you encounter any other problems, we're here to help. Enjoy your day!",
		'Thank you for contacting us. Have a nice day!',
		'Feel free to call us if you have any more questions. Have a great day!',
		"I'm glad we could resolve your issue. Have a wonderful day!",
		'Thank you for your patience. Have a great day!',
		"If you need further assistance, don't hesitate to reach out. Take care!",
		"We're here to help anytime. Have a fantastic day!",
		'Thank you for using our service. Have a nice day!',
		'Happy to help. Enjoy the rest of your day!',
		'Please contact us if you need any more help. Have a great day!',
		'Thank you for calling. Have a wonderful day!',
		'If you have any more issues, just give us a call. Take care!',
		"I'm glad we could help. Have a fantastic day!",
		'Thank you for reaching out to us. Have a great day!',
		"Don't hesitate to contact us if you need further assistance. Enjoy your day!"
	],
	customerTrying: [
		'Alright, let me try that.',
		"Let's give it a shot.",
		"Okay, let's see if that works.",
		"Let's try that out.",
		"Alright, let's see if that helps.",
		"Okay, let's give that a try.",
		"Let's see if that does the trick.",
		"Alright, let's see if that fixes it.",
		"Okay, let's see if that resolves the issue.",
		"Let's try that and see what happens.",
		"Alright, let's see if that makes a difference."
	],
	angryHangup: [
		"Nothing's working! I'm done with this!",
		"I'm tired of this! I'm hanging up!",
		"This is ridiculous! I'm ending this call!",
		"I'm not getting anywhere with this! Goodbye!",
		"I've had enough! I'm hanging up!",
		"I'm done with this! Goodbye!",
		"I'm not getting the help I need! I'm ending this call!",
		"I'm frustrated! I'm hanging up!",
		"I'm not getting anywhere with this! I'm done!",
		"I'm not getting the support I need! Goodbye!"
	]
};

function generateRandomIndex(array) {
	return Math.floor(Math.random() * array.length);
}

export function generateTechSupportGreeting() {
	const greeting =
		techSupportConversations.techSupportIntroductions.greetings[
			generateRandomIndex(techSupportConversations.techSupportIntroductions.greetings)
		];
	const middle =
		techSupportConversations.techSupportIntroductions.middle[
			generateRandomIndex(techSupportConversations.techSupportIntroductions.middle)
		];
	const closingQuestion =
		techSupportConversations.techSupportIntroductions.closingQuestions[
			generateRandomIndex(techSupportConversations.techSupportIntroductions.closingQuestions)
		];
	return {
		greeting: greeting,
		middle: middle,
		closingQuestion: closingQuestion,
		aboutFeeling: closingQuestion.aboutFeeling
	};
}

export function generateCustomerFeeling() {
	const feeling = ['cheerful', 'neutral', 'angry'];
	return feeling[generateRandomIndex(feeling)];
}

export function generateCustomerGreeting(feeling, aboutFeeling) {
	const responses = techSupportConversations.customerResponses[feeling].filter(
		(response) => response.aboutFeeling
	);
	return {
		response: responses[generateRandomIndex(responses)],
		feeling: feeling,
		aboutFeeling: aboutFeeling
	};
}

export function generateTechSupportFollowup(feeling) {
	const responses = techSupportConversations.techSupportResponses[feeling];
	return {
		response: responses[generateRandomIndex(responses)],
		feeling: feeling
	};
}

function generateRandomIssueType() {
	const issues = ['computer', 'printer', 'router', 'phone'];
	return issues[generateRandomIndex(issues)];
}

export function generateCustomerIssue() {
	const issueType = generateRandomIssueType();
	const issues = techSupportConversations.issues[issueType];
	const issue = issues[generateRandomIndex(issues)];
	return {
		issue: issue,
		issueType: issueType
	};
}

export function generateTechSupportResponse(issueType, indices) {
	const responses = techSupportConversations.responses[issueType];
	let index = generateRandomIndex(responses);

	while (indices.includes(index)) {
		index = generateRandomIndex(responses);
	}

	const response = responses[index];

	return {
		response: response,
		issueType: issueType,
		index: techSupportConversations.responses[issueType].indexOf(response)
	};
}

export function generateDidntWorkResponse() {
	const responses = techSupportConversations.didntWork;
	return responses[Math.floor(Math.random() * responses.length)];
}

export function generateThankYouResponse() {
	const responses = techSupportConversations.thankYou;
	return responses[Math.floor(Math.random() * responses.length)];
}

export function generateSignOffResponse() {
	const responses = techSupportConversations.signOff;
	return responses[Math.floor(Math.random() * responses.length)];
}

export function generatePreResponse() {
	const responses = techSupportConversations.preResponses;
	return responses[Math.floor(Math.random() * responses.length)];
}

export function generatePostDidntWorkResponse() {
	const responses = techSupportConversations.postDidntWork;
	return responses[Math.floor(Math.random() * responses.length)];
}

export function generateAngryHangupResponse() {
	const responses = techSupportConversations.angryHangup;
	return responses[Math.floor(Math.random() * responses.length)];
}

export function generateCustomerTryingResponse() {
	const responses = techSupportConversations.customerTrying;
	return responses[Math.floor(Math.random() * responses.length)];
}
