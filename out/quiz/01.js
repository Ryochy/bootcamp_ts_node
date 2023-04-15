"use strict";
// ---------- 型の定義 ----------
Object.defineProperty(exports, "__esModule", { value: true });
// Q1: 変数 a の定義のしかたを修正して型エラーを直してください
// ヒント: const の使い方を調べてみましょう
// ここを変更する
let a = 1;
// ここがエラーにならないようにする
a++;
// Q2: 変数 c の定義を修正して型エラーを直してください
const b = 2;
// ここの型を修正する
const c = b;
// Q3: 変数 d の定義を修正して型エラーを直してください
// ここの型を修正する
const d = "hello";
// ここがエラーにならないようにする
const e = d;
// ---------- 型推論 (Type Inference) ----------
// Q4: 変数 g の定義を修正して型エラーを直してください
const f = 1;
const g = f;
