interface Position {
  top: number;
  left: number;
  scale: number;
}

export function generateRandomPosition(index: number): Position {
  // Create deterministic but seemingly random positions based on index
  const positions: Position[] = [
    { top: 10, left: 15, scale: 1 }, // Top left
    { top: 15, left: 75, scale: 0.8 }, // Top right
    { top: 45, left: 5, scale: 0.9 }, // Middle left
    { top: 40, left: 85, scale: 1.1 }, // Middle right
    { top: 75, left: 20, scale: 0.85 }, // Bottom left
    { top: 70, left: 80, scale: 0.95 }, // Bottom right
  ];

  return positions[index % positions.length];
}
