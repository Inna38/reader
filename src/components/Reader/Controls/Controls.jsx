export const Controls = ({ current, totalItems, onPrevClick, onNextClick }) => {
  return (
    <section>
      <button
        type="button"
        disabled={current === 1}
        onClick={() => onPrevClick(-1)}
      >
        Back
      </button>
      <button
        type="button"
        disabled={current === totalItems}
        onClick={() => onNextClick(1)}
      >
        Next
      </button>
    </section>
  );
};
