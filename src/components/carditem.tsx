interface cardprops {
    listcard: {list: string}[];
};

const CardItem = ({listcard}:cardprops) => {
    return(
        <div className="bg-white rounded-lg p-1 drop-shadow-md border border-slate-300 my-2">
          {listcard.map(itemx => <div key={itemx.list}>{itemx.list}</div>)}
        </div>
    );
}

export default CardItem;