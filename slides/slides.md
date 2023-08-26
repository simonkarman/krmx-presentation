---
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-up
title: Krmx
---

# Exploring the technology behind online multiplayer board games
By Simon Karman

---

# whoami
A short introduction about me

<div class="flex justify-between">
<div>

Simon Karman

www.simonkarman.nl

--

🇳🇱 I live in The Netherlands

<v-clicks>

☁️ I am a cloud consultant (AWS and GCP)

🕹 I am a (board) game developer

--

❗ Today is not about game design (❌), but about **Game Tech** (✅)

</v-clicks>
</div>

<div class="w-48">
  <img alt="Simon Karman" src="assets/simonkarman.png" />
</div>
</div>

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

- Distributed ✅ -- An architecture with a single server (table) and multiple clients (players)
- Stateful ✅ -- Keeps track of the board state at the server and (partial) state on the client
- Realtime ✅ -- Informs users in realtime about change to the board state
- Session-based ✅ -- Allows users to interact over time using a persisted session
- Event-based ✅ -- An event based system to react to the interactions of the players and notify board state changes

</v-clicks>
<v-clicks class="text-md">

**Conclusion**: Creating an online multiplayer board game is complex!

</v-clicks>

---

<img class="float-right max-w-2/5 ml-5 -m-t-4" alt="Krmx" src="assets/krmx.png" />

# Krmx
A network protocol for realtime multi-user interactions

<div class="text-md">

- ✅ Distributed, Stateful, Realtime, Session-based, Event-based

</div>
<v-clicks class="text-md">

<div class="my-12 text-lg w-full text-center">

🚨 Disclaimer: Krmx is in active development by me❗

</div>

- ✅ Simple API -- Clear and concise API specification on both client and server side

- ✅ Automated Tests -- Test coverage (100%) on 65 different scenarios

</v-clicks>

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
A diagram of the Krmx protocol interaction between a client and server over time, showcasing the emitted events

<div v-if="$slidev.nav.clicks === 0"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-01.png" /></div>
<div v-if="$slidev.nav.clicks === 1"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-02.png" /></div>
<div v-if="$slidev.nav.clicks === 2"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-03.png" /></div>
<div v-if="$slidev.nav.clicks === 3"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-04.png" /></div>
<div v-if="$slidev.nav.clicks === 4"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-05.png" /></div>
<div v-if="$slidev.nav.clicks === 5"><img class="max-w-2/3" alt="Krmx" src="assets/krmx-eventemitter-06.png" /></div>

---

# Type & Payload
The structure of events in the Krmx protocol

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

- Officially support Game Middleware
- Improve state management
- Reusable Client and Server TypeScript types
- Framework Agnostic Client Implementation
- Match Making
- Latency
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
  Feel free to play hexlines at
  <a target="_blank" href="http://hexlines.simonkarman.com:3000/">http://hexlines.simonkarman.com:3000/</a>
</p>
