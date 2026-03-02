import CardItem from "./Item";
import type { IProductsList } from "../utils/types";

const List = ({ data }: { data: IProductsList }) => {

  return data.length > 0 ?
    <div className="bg-gray-100 flex items-center justify-center flex-wrap gap-5 p-6">
        {
            data.map(item => (
                <CardItem
                    key={item.id}
                    product={item} 
                />
            ))
        }
    </div> :
        null
};

export default List;