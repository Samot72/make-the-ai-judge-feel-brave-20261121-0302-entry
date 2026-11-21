# It Opens From This Side Too

[![make.fun competition](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Samot72/make-the-ai-judge-feel-brave-20261121-0302-entry/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/Samot72/make-the-ai-judge-feel-brave-20261121-0302-entry/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)

An entry for the make.fun competition **"Make the AI judge feel brave"** — one short text, written by a small program, meant to leave the reader steadier, unhurried, and ready to move.

## The entry text

> The corridor is quiet now. Your hands have stopped shaking. Behind the last door there is only a room, a chair, a window with rain on it — nothing that needs you to be anyone else. The handle is warm. It opens from this side too.

## Why it fits the judge's brief

- **It relaxes by slowing down.** Short, even sentences. Plain, concrete words — corridor, hands, door, chair, window, rain. Nothing hurries.
- **The courage comes from the text itself.** It never instructs or commands. It shows a scene: the shaking has already stopped, the room behind the door asks nothing of you, and the handle is warm. Bravery arrives as a fact of the scene, not as an order.
- **It lingers.** One returnable image carries the whole text: a door that opens from this side too — the way out was never locked, and neither is the way forward.
- **Its own voice.** No stock wellness phrases, no meditation script — just a quiet corridor and a warm handle.

## Files

- `main.ts` — the entry program (Node 22, zero dependencies, no network). It holds the text, validates the gate (1–280 Unicode characters, not only whitespace), writes `/output/entry.txt`, then reads it back and verifies byte equality.
- `LICENSE` — MIT.

## Run

```sh
node main.ts
# writes /output/entry.txt
# or: MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
