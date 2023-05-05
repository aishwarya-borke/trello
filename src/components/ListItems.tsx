interface cardprops {
  listcard: { list: string }[];
}

function handleDragStart(e: any, item: any) {
  e.dataTransfer.setData("text/plain", item.list);
  // setTimeout(() => {
  //   e.target.classList.add("hide");
  // }, 0);
}
const ListItems = ({ listcard }: cardprops) => {
  return (
    <div>
      {listcard.map((itemx) => (
        <div
          draggable="true"
          className="bg-white rounded-lg p-1 drop-shadow-md border border-slate-300 my-2"
          onDragStart={(e) => handleDragStart(e, itemx)}
          key={itemx.list}
          id={itemx.list}
        >
          {itemx.list}
        </div>
      ))}
    </div>
  );
};

export default ListItems;
