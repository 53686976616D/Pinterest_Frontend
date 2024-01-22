import BoardForm from "./BoardForm";

const Board = ({ isSetBoard }) => {

  return (
    <>
      <BoardForm
        isSetBoard={isSetBoard}
      />
    </>
  );
};

export default Board;
