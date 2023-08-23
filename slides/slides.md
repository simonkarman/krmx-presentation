---
theme: ./presentation-templates/slidev-theme-xebia
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-up
title: Krmx
---

# WebSockets for Turn-Based Multiplayer Games
24th of August 2023 @ AdvancedJS Meetup

Simon Karman (www.simonkarman.nl)

<div class="flex gap-8">
<div class="w-24">
  <img alt="Simon Karman" src="assets/simonkarman.png" />
</div>
<div>

💼 Xebia Cloud Consultant 

🕹 (Hobbyist) Game Developer

</div>
</div>


<style>
.slidev-layout.cover h1 {
    margin-top: 4rem;
    max-width: 20rem;
    font-size: 1.5rem;
}
</style>

<!--
Verify: Clock in sight or timer on table!

Live coding of a simple turn-based game using a TypeScript NodeJS backend and a Typescript React frontend using the krmx library. Krmx is a custom WebSocket protocol specifically build for user-based applications such as turn based games with NodeJS backends and React frontends.

I work at Xebia as a Cloud Consultant. In my free time I'm a hobbyist game developer. I love boardgames and especially making them. Since I was a kid. During covid trying to combine cloud/internet with games. Resulted in some multiplayer games for a group of friends (b11 party) which was 'Mario Party'-ish.
-->

---

# Let's start at the basics
What is a board game?

- Table and players
- Players can look at the board state on the table (cards, pieces, dice, ect...)
- In some games, players have imperfect information of the board state
- Players can take actions

<img class="max-w-full mt-10" src="assets/boardgame.png" />

---
clicks: 4
---

# A board game over the internet
Building a framework for an online multiplayer game

<div v-if="$slidev.nav.clicks === 0"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-0.png" /></div>
<div v-if="$slidev.nav.clicks === 1"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-1.png" /></div>
<div v-if="$slidev.nav.clicks === 2"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-2.png" /></div>
<div v-if="$slidev.nav.clicks === 3"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-3.png" /></div>
<div v-if="$slidev.nav.clicks === 4"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-4.png" /></div>

---

# What we need
A system that is ...

<v-clicks class="text-md">

- Distributed ✅ -- An architecture with a server and multiple clients
- Stateful ✅ -- Keeps track of all state at the server and (partial) state on the client
- Realtime ✅ -- Informs users in realtime via WebSockets
- Asynchronous ✅ -- Allows users to interact over time using a persisted session

</v-clicks>
<v-clicks class="text-md">

**Conclusion**: Creating an online multiplayer board game is complex!

</v-clicks>

---

<img class="float-right max-w-2/5 ml-5 -m-t-4" alt="Krmx" src="assets/krmx.png" />

# Krmx
A network protocol for realtime multi-user interactions

<v-clicks class="text-md">

<div class="my-12 text-lg w-full text-center">

🚨 Disclaimer: Krmx is a pet project by me❗

</div>

</v-clicks>
<v-clicks class="text-md">

- Fun 🎉
- Simple API ✅ -- Clear and concise API specification on both client and server side
- Automated Tests ✅ -- Test coverage (100%) on 65 different scenarios

</v-clicks>

<!--
Disclaimer points: Fun! & C# before & Tests!
-->

---
layout: iframe
url: http://hexlines.simonkarman.com:3000/
---

# Demo
This page is hidden as the iframe takes up the whole page.

---
clicks: 5
---

# Krmx Protocol
A diagram of the Krmx protocol interaction with a client over time

<div v-if="$slidev.nav.clicks === 0"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-01.png" /></div>
<div v-if="$slidev.nav.clicks === 1"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-02.png" /></div>
<div v-if="$slidev.nav.clicks === 2"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-03.png" /></div>
<div v-if="$slidev.nav.clicks === 3"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-04.png" /></div>
<div v-if="$slidev.nav.clicks === 4"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-05.png" /></div>
<div v-if="$slidev.nav.clicks === 5"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-06.png" /></div>


<!--
- Protocol
- Event Emitter
- Client and Server Side
- Store state at server
- Keeps track of user sessions
- WebSockets for realtime updates
-->

---

# Type & Payload
The structure of all events in the protocol

```json5 {1|3|5|7|all}
{ type: string, payload: object }

{ type: "user/joined", payload: { username: "simon" } }

{ type: "user/linked", payload: { username: "simon" } }

{ type: "my-game/creature-spawned", payload: { class: "dragon", power: 10 } }
```

---

<img class="float-right max-w-2/5 ml-5 -m-t-4" alt="Krmx" src="assets/krmx.png" />

# Reference Implementations
--

TypeScript React **Client** Reference Implementation

```bash
npm install @krmx/client
```

--

Typescript NodeJS **Server** Reference Implementation

```bash
npm install @krmx/server
```

---
layout: iframe
url: https://simonkarman.github.io/krmx
---

# Documentation
This page is hidden as the iframe takes up the whole page.

---

# Live Coding!
Let's build a simple Krmx server and client architecture

<img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-05.png" />

---

# Customization
Use middleware to add your own functionality

<img class="max-w-2/5" alt="Krmx" src="assets/krmx-middleware.png" />

---

# Upcoming features


- State management
- Latency
- Officially support Game Middleware
- ... more!

Want to help? Go to **github.com/simonkarman/krmx**

---

<div class="flex flex-col items-center float-right w-64">
  <img class="w-48" alt="Simon Karman" src="assets/simonkarman.png" />
  <p class="text-center font-bold">Simon Karman</p>
  <p class="text-center">simon.karman@xebia.com</p>
  <p class="text-center">www.simonkarman.nl</p>
  <p class="text-center">github.com/simonkarman/krmx</p>
</div>

# Thank you! Questions?

<img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-05.png" />

<p class="max-w-2/3 text-sm">
  During the break you can play hexlines at
  <a target="_blank" href="http://hexlines.simonkarman.com:3000/">http://hexlines.simonkarman.com:3000/</a>
</p>
