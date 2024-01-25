import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";
import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
// A signal is an entry point to react-rxjs. It's equivalent to using a subject
const [textChange$, setText] = createSignal();

const [useText, text$] = bind(textChange$, "");

const first5Numbers = new BehaviorSubject(1);

// setTimeout(() => {
//   first5Numbers.next(2);
// }, 2000);
first5Numbers.subscribe((n) => {
  console.log("1", n);
  setText(n);
});

function TextInput() {
  const [text1, setText1] = useState(1);
  const text = useText();
  console.log("hello", text1);
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => first5Numbers.next(e.target.value)}
      />
      <input
        type="text"
        value={text1}
        placeholder="Type something..."
        onChange={(e) => setText1(e.target.value)}
      />
      <br />
      Echo: {text1}
    </div>
  );
}
export default TextInput;
