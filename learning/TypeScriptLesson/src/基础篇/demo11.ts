interface HTMLElementTagNameMap {
  a: HTMLAnchorElement;
  abbr: HTMLElement;
  address: HTMLElement;
  applet: HTMLAppletElement;
  area: HTMLAreaElement;
  article: HTMLElement;
  input: HTMLInputElement;
}

const textEl = document.querySelector<HTMLInputElement>('input');
if (textEl !== null) {
  textEl.addEventListener('click', (e: MouseEvent) => {
    console.log(e.clientX);
  });
  console.log(textEl.value);
}

const textEl1 = document.querySelector('input') as HTMLInputElement;
const textEl2 = document.querySelector<HTMLInputElement>('input');
console.log(textEl2!.value);

//react
// onClick(event: React.MouseEvent<HTMLButtonElement>): void;
// React.ComponentPropsWithoutRef<"button">;
