// index.test.ts
import { describe, it, expect } from "bun:test";
import { getProtagonistTypeFromMidiChlorianCountPerCell } from "./exercice01";

describe("Tests unitaires pour la fonction getProtagonistTypeFromMidiChlorianCountPerCell", () => {
  it("devrait retourner 'Living Being' pour un taux de midi-chlorien inférieur à 5000", () => {
    expect(getProtagonistTypeFromMidiChlorianCountPerCell(2000)).toBe("Living Being");
  });

  it("devrait retourner 'Potentially Force Sensitive' pour un taux de midi-chlorien entre 5000 et 9999", () => {
    expect(getProtagonistTypeFromMidiChlorianCountPerCell(7000)).toBe("Potentially Force Sensitive");
  });

  it("devrait retourner 'Force Sensitive' pour un taux de midi-chlorien entre 10000 et 19999", () => {
    expect(getProtagonistTypeFromMidiChlorianCountPerCell(17000)).toBe("Force Sensitive");
  });

  it("devrait retourner 'Master' pour un taux de midi-chlorien supérieur ou égal à 20000", () => {
    expect(getProtagonistTypeFromMidiChlorianCountPerCell(27000)).toBe("Master");
  });
});
