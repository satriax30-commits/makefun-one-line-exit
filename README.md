# The One-Line Exit

[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/satriax30-commits/makefun-one-line-exit/rank.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/satriax30-commits/makefun-one-line-exit/reward.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)

Entry for [The One-Line Exit](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1) on make.fun.

## The entry

> I hereby resign as your escape room designer — I built twelve rooms nobody could escape, then realised the thirteenth was this job.

## How to run

Requires Node 22 or later. The program writes the single-line resignation letter to `/output/entry.txt`:

```sh
node main.ts
```

For local testing, redirect the output directory with `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is deterministic: no clock, no randomness, no network, no environment secrets. Standard library only.
