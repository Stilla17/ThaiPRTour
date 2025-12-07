import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/Group 1675.svg';
import { LuPhone } from 'react-icons/lu';
import logo1 from '../../assets/Component 11 (1).png';
import logo2 from '../../assets/Component 11 (2).png';
import logo3 from '../../assets/Component 11 (3).png';
import logo4 from '../../assets/Component 11 (4).png';



let main = [
  {
    title: 'О компании',
    links: ['О нас', 'Наши услуги', 'Контакты', 'FAQ'],
  },
  {
    title: 'Гражданство и ВНЖ',
    links: ['Гражданство через инвестиции', 'Вид на жительство', 'Паспорт второй страны', 'Юридическое сопровождение'],
  },
  {
    title: 'Недвижимость',
    links: ['Купить недвижимость', 'Аренда жилья', 'Коммерческая недвижимость', 'Инвестиции в недвижимость', 'Юридическая помощь'],
  },
  {
    title: 'Индекс паспорта',
    links: ['Рейтинг паспортов', 'Безвизовые страны', 'Страны с визой по прибытию', 'Сравнение паспортов'],
  },
  {
    title: 'Авто услуги',
    links: ['Покупка авто', 'Продажа авто', 'Аренда авто', 'Перегон авто'],
  },
  {
    title: 'Консьерж-сервис',
    links: ['Аренда яхт', 'Аренда вертолёта', 'Аренда VIP авто', 'Обслуживание гостей 24/7'],
  },
];


const FooterList = () => {
  return (
    <div className="w-full">
      <div className="mt-10">
        <div className="w-full h-px bg-gray-600"></div>
      </div>

      <div className="px-4 py-10 bg-white">
        <div className="flex  md:flex-row justify-center md:justify-start gap-[40px]">

          <div className="text-center md:text-left shrink-0">
            <img src={logo} alt="logo" className="mx-auto md:mx-0" />

            <div className="flex justify-center md:justify-start items-center mt-10 gap-2">
              <LuPhone />
              <p>+7(495)149-05-00</p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2 mt-3">
              <LuPhone />
              <p>+7(495)149-05-00</p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-3 mt-8">
              <img src={logo1} alt="telegram" />
              <img src={logo3} alt="telegram" />
              <img src={logo2} alt="facebook" />
              <a href="/register"></a>
              <img src={logo4} alt="facebook" />
            </div>
          </div>

          {main.map((item, index) => (
            <ul key={index} className="text-center md:text-left  md:w-auto">
              <li className="font-bold mb-2">{item.title}</li>

              {(item.links ?? []).map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="text-gray-600 hover:text-black transition mb-1"
                >
                  <Link to="/">{link}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center items-center">
        <div className="w-[90%] h-px bg-gray-600"></div>
      </div>

    </div>
  );
};


export default FooterList;
