import { sveltekit } from '@sveltejs/kit/vite';
import { type ViteDevServer, defineConfig } from 'vite';
import { Server } from 'socket.io';

const webSocketServer = {
	name: 'WebSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return;

		const users: { id: string; role: string }[] = [];
		let countingDown = false;
		let countdown;
		let totalUsers = 0;

		const io = new Server(server.httpServer);
		io.on('connection', (socket) => {
			totalUsers = io.engine.clientsCount;

			io.emit('total users', totalUsers);

			socket.on('userRole', (role) => {
				users.push({ id: socket.id, role });

				if (role === 'listen') {
					const players = users.filter((user) => user.role === 'play');
					//emit to all players
					players.forEach((player) => {
						io.to(player.id).emit('listener connected');
					});
				}

				console.log(`User with role ${role} connected`);
			});

			socket.on('check for listener', () => {
				const listeners = users.filter((user) => user.role === 'listen');
				if (listeners.length > 0) {
					io.to(socket.id).emit('listener connected');
				}
			});

			socket.on('phone call', (object) => {
				const listeners = users.filter((user) => user.role === 'listen');
				if (listeners.length > 0) {
					listeners.forEach((listener) => {
						io.to(listener.id).emit('phone call', object);
					});
				}
			});

			socket.on('phone picked up', (object) => {
				const listeners = users.filter((user) => user.role === 'listen');
				if (listeners.length > 0) {
					listeners.forEach((listener) => {
						io.to(listener.id).emit('phone picked up', object);
					});
				}
			});

			socket.on('customer voice line', (id) => {
				const listeners = users.filter((user) => user.role === 'listen');
				if (listeners.length > 0) {
					listeners.forEach((listener) => {
						io.to(listener.id).emit('customer voice line', id);
					});
				}
			});

			socket.on('call ended', (name) => {
				const listeners = users.filter((user) => user.role === 'listen');
				if (listeners.length > 0) {
					listeners.forEach((listener) => {
						io.to(listener.id).emit('call ended', name);
					});
				}
			});

			socket.on('happy customer', (name) => {
				const listeners = users.filter((user) => user.role === 'listen');
				if (listeners.length > 0) {
					listeners.forEach((listener) => {
						io.to(listener.id).emit('happy customer', name);
					});
				}
			});

			socket.on('angry customer', (name) => {
				const listeners = users.filter((user) => user.role === 'listen');
				if (listeners.length > 0) {
					listeners.forEach((listener) => {
						io.to(listener.id).emit('angry customer', name);
					});
				}
			});

			socket.on('start countdown', () => {
				if (!countdown && !countingDown) {
					countdown = 30;
					countingDown = true;
					let timer = setTimeout(function count() {
						if (countdown === 0) {
							clearTimeout(timer);
							countingDown = false;
							countdown = 0;
							io.emit('piece ended');
						} else {
							countdown--;
							timer = setTimeout(count, 1000);
						}
						io.emit('counting down', countdown);
					}, 1000);
				}
			});

			socket.on('disconnect', () => {
				totalUsers = io.engine.clientsCount;
				io.emit('total users', totalUsers);
				const index = users.findIndex((user) => user.id === socket.id);
				if (index !== -1) {
					users.splice(index, 1);
				}
			});
		});
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
