"use client";

import { QuizState } from "@app/modules/quiz/types/quiz-state";

const STORAGE_KEY = "app-state";

class StorageService {
  constructor() {}

  public readState(): QuizState | null {
    const state = localStorage.getItem(STORAGE_KEY);

    if (!state) {
      return null;
    }

    return JSON.parse(state);
  }

  public writeState(state: QuizState) {
    // This is a simple implementation, in a real-world application i would include state validation with a library like Zod
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}

const storageSingleton = new StorageService();

export default storageSingleton;
