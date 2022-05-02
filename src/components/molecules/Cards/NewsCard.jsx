import { useState } from "react";
import Description from "../../atoms/Typography/Description";
import TextLink from "../../atoms/Typography/TextLink";
import Title from "../../atoms/Typography/Title";

const NewsCard = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="p-4 max-w-3xl rounded-lg border border-gray-400 cursor-pointer"
      onMouseEnter={() => setOnHover(() => true)}
      onMouseLeave={() => setOnHover(() => false)}
    >
      <TextLink className="dark:text-[#BDC1C6]" text="Liputan6.com" />
      <Title
        className={`${onHover ? "text-blue-500 dark:text-blue-400" : ""}`}
        text="Yuk nonton sore ini, live streaming dota2 university season 4 DOTA2 playoffs di vidio"
      />
      <Description
        className="text-gray-500"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptates, labore expedita recusandae illo mollitia illum eum nihil, nam eligendi repellendus maxime debitis. Et corrupti similique incidunt fugiat dolor nemo impedit asperiores eveniet eum? Ea numquam temporibus dolorem voluptatibus ullam illum laudantium esse, a consectetur nostrum mollitia id officiis reprehenderit amet tempora dolores nemo atque sunt saepe magnam eos quae sit ipsa blanditiis. Nam vel alias veritatis praesentium voluptatum recusandae repellat soluta nobis, nihil vitae molestiae officia minima et culpa aliquid iure sunt! Perferendis itaque laudantium quod illum asperiores! Veritatis aut hic beatae fugiat in expedita quo vitae non sequi, amet qui maxime magni vel pariatur? Dolore totam nemo, consectetur laborum quibusdam at officiis! Fugiat quas est eveniet iste deserunt et sed excepturi cupiditate, obcaecati quam magni eius quia voluptatem. Suscipit voluptatem obcaecati dolor voluptas atque quaerat ipsam ad doloribus doloremque voluptates, in totam? Sit libero itaque voluptates, sint provident earum, molestias, hic amet iste iusto non quos id laborum vel doloribus facere iure odit architecto natus veniam pariatur dolorem voluptas consectetur? Consequuntur velit cumque est magni exercitationem aspernatur reiciendis placeat omnis, excepturi voluptatibus esse temporibus quidem modi numquam corporis. Et at sit praesentium repellat maxime asperiores sint hic architecto?"
      />
      <Description className="dark:text-[#BDC1C6]" text="2 week ago" />
    </div>
  );
};

export default NewsCard;
