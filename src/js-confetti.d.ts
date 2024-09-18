declare module 'js-confetti' {
  interface ConfettiOptions {
      emojis?: string[];
      confettiColors?: string[];
      confettiRadius?: number;
      confettiNumber?: number;
      emojiSize?: number;
  }

  export default class JSConfetti {
      constructor(options?: any);
      addConfetti(options?: ConfettiOptions): Promise<void>;
  }
}