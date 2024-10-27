import { Text } from "@app/app/design-components";
import { fetchFooterData } from "@app/app/lib/data";
import { SubmenuItem } from "./submenu-item";

export async function Submenus() {
  const data = await fetchFooterData();

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:flex
     gap-[40px] md:gap-[120px]"
    >
      {data.map((item) => (
        <div key={item.section}>
          <Text
            variant="body-small"
            as="h3"
            weight="bold"
            className="uppercase tracking-[0.15em]"
          >
            {item.section}
          </Text>
          <ul className="flex flex-col gap-[10px] lg:gap-[20px] mt-[20px]">
            {item.items.map((subitem) => (
              <SubmenuItem
                key={subitem.name}
                name={subitem.name}
                link={subitem.link}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
