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

<div class="w-24">
  <img alt="Simon Karman" src="assets/simonkarman.png" />
</div>

💼 Xebia -- 🕹 Boardgames -- 🌎 Multiplayer

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

# Board game
Let's start at the basis. What is a board game?

- Table and Players
- Players can look at the board state on the table (cards, pieces, dice, ect...)
- In some games, players have imperfect information of the board state
- Players can take actions

<img class="max-w-full mt-10" src="assets/boardgame.png" />

---
clicks: 8
---

# Online multiplayer game
A board game over the internet!

<div v-if="$slidev.nav.clicks === 0"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-0.png" /></div>
<div v-if="$slidev.nav.clicks === 1"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-1.png" /></div>
<div v-if="$slidev.nav.clicks === 2"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-2.png" /></div>
<div v-if="$slidev.nav.clicks === 3"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-3.png" /></div>
<div v-if="$slidev.nav.clicks >= 4"><img class="max-w-full mt-10" src="assets/boardgame-multiplayer-4.png" /></div>

<div class="flex gap-8 w-full justify-center">
  <p v-if="$slidev.nav.clicks >= 5" class="">❌ Co-located System</p>            
  <p v-if="$slidev.nav.clicks >= 6" class="">❌ Stateless</p> 
  <p v-if="$slidev.nav.clicks >= 7" class="">❌ Synchronous</p>
</div>
<div v-if="$slidev.nav.clicks >= 8" class="-mt-4 text-xl text-center w-full">
  <b>Conclusion</b>: creating an online multiplayer board game is complex!
</div>

---

<img class="float-right max-w-2/5 ml-5 -m-t-4" alt="Krmx" src="assets/krmx.png" />

# Krmx
A network protocol for realtime multi-user interactions.

<v-clicks class="text-md">

- Distributed System ✅: A clients and server architecture
- Stateful ✅: Keeps track of all state at the server and (partial) state on the client
- Realtime ✅: Informs users in realtime via WebSockets
- Asynchronous ✅: Allows users to interact over time using a persisted session
- Easy API ✅: Clear and concise API specification on both client and server side
- Automated Tests ✅: Test coverage (100%) on 65 different scenarios

</v-clicks>
<v-clicks class="text-md">

<div class="mt-4 text-lg w-full text-center">

🚨 Disclaimer: Krmx is a pet project by me❗ Why?
 
</div>

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
Event Emitter at its core.

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

# Krmx Protocol - Events
It's all just events

```json5 {1|2|3|4|all}
{ type: string, payload: object }
{ type: "user/joined", payload: { username: "simon" } }
{ type: "user/linked", payload: { username: "simon" } }
{ type: "my-game/creature-spawned", payload: { class: "dragon", power: 10 } }
```

---

<img class="float-right max-w-2/5 ml-5 -m-t-4" alt="Krmx" src="assets/krmx.png" />

# Krmx Implementation
What reference implementation are already available?

- Typescript NodeJS **Server** Reference Implementation

```bash
npm install @krmx/server
```

- TypeScript React **Client** Reference Implementation
 
```bash
npm install @krmx/client
```

---

# Customization
Use middleware to add your own functionality.

<img class="max-w-2/5" alt="Krmx" src="assets/krmx-middleware.png" />

---
layout: iframe
url: https://simonkarman.github.io/krmx
---

# Documentation
This page is hidden as the iframe takes up the whole page.

---

# Live Coding!
Let's build a simple Krmx Server and Client setup.

```bash
npm install @krmx/server
npm install @krmx/client
```

Behind the scenes of hexlines!

---

# Upcoming features
- State management
- Latency
- Officially support Game Middleware
- Want to help? Go to github.com/simonkarman/krmx

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
