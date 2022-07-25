import { FlatList } from "react-native";
import Note from "./Note";

const DATA = [
  {
    id: 1,
    title: "Catatan 1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam eveniet repellat ab numquam, obcaecati enim adipisci quaerat ut quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi repudiandae nihil obcaecati ab neque? Temporibus et deserunt amet praesentium quam est blanditiis reiciendis quasi nam officiis at incidunt velit, facilis dolorem voluptate ullam ut, mollitia modi nobis distinctio corporis! Nisi non earum animi doloribus harum sapiente sed dolorem omnis facere maxime dicta ipsam ipsum neque pariatur nihil, voluptas magnam impedit eius, nobis consectetur quidem rerum. Consequatur itaque quis harum ab distinctio! Harum ab nisi nulla ipsa quia dolores enim. Possimus vel deleniti non consequatur, ducimus iusto cupiditate inventore velit perferendis reiciendis vero facere perspiciatis rem sunt molestias obcaecati delectus sapiente itaque? Qui repellendus quos aliquid. Error ducimus saepe nobis quis, facilis ex sed, expedita incidunt fugiat commodi praesentium aliquid deserunt dolor vel ea tempora esse necessitatibus nam minima? Exercitationem sequi animi sint nobis perspiciatis, harum soluta. Amet error tempora eveniet corrupti, incidunt iure debitis inventore odit sit culpa placeat a, necessitatibus non. Delectus doloremque amet nesciunt minus deserunt ut obcaecati veritatis nobis ipsum quasi molestiae sed aliquid unde vero itaque, ullam dolor numquam modi, facilis aspernatur cumque architecto illo. Numquam exercitationem laboriosam harum voluptatibus minus iusto adipisci et nemo, distinctio explicabo rem veritatis id soluta optio hic aperiam rerum. Exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus maxime similique facere pariatur nisi expedita temporibus dolore illo porro, totam ratione soluta repellat veniam esse dolorem. Est rem modi atque exercitationem. Itaque eveniet explicabo voluptatibus sed repellendus tempore voluptatem asperiores perferendis assumenda tempora! Maiores qui doloremque veritatis distinctio alias. Dicta cumque dolorum sint quae voluptatum adipisci architecto omnis laudantium? Omnis, velit dolor, eaque libero quam ut, suscipit veritatis sint eligendi veniam beatae. Porro at repellendus eius unde numquam dolores aperiam quam amet minus, sequi earum enim expedita labore asperiores, facilis sed placeat voluptates reprehenderit harum iusto obcaecati, maiores perferendis.`,
  },
  {
    id: 2,
    title: "Catatan 2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde deserunt optio nemo eum non libero ad! Perferendis quos reprehenderit ab. Consequuntur minus a totam!`,
  },
  {
    id: 3,
    title: "Catatan 3",
    content: `Lorem ipsum dolor sit amet.`,
  },
  {
    id: 4,
    title: "Catatan 4",
    content: `Lorem ipsum dolor sit amet.`,
  },
  {
    id: 5,
    title: "Catatan 5",
    content: `Lorem ipsum dolor sit amet.`,
  },
  {
    id: 6,
    title: "Catatan 6",
    content: `Lorem ipsum dolor sit amet.`,
  },
  {
    id: 7,
    title: "Catatan 7",
    content: `Lorem ipsum dolor sit amet.`,
  },
  {
    id: 8,
    title: "Catatan 8",
    content: `Lorem ipsum dolor sit amet.`,
  },
];

export default function NoteList() {
  return <FlatList data={DATA} numColumns={2} renderItem={({ item }) => <Note {...item} />} keyExtractor={(item) => item.id} />;
}
