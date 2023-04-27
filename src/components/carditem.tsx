interface cardprops {
    listcard: {list: string}[];
}

export default function CardItem({listcard}:cardprops) {
    
    return(
        <div className="bg-white rounded-lg p-1 drop-shadow-md border border-slate-300 my-2">
          {listcard.map(item => <div key={item.list}>{item.list}</div>)}
        </div>
    );
}