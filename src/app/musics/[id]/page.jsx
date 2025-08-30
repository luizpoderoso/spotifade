export default function MusicPage({ params }) {
  const songId = params.id;

  return (
    <div>
      <h1>Página da Música</h1>
      <p>O ID desta música é: {songId}</p>
    </div>
  );
}
