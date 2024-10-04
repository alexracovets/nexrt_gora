import { Container } from "@/components/shared/container";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <section>
        <Container className="py-[10rem] max-md:py-[5rem]">
          <div className="flex flex-col justify-center items-center mx-auto w-[120rem] max-md:w-full">
            <div className="text-[4rem] uppercase text-center text-regal-beige font-playfair mb-[4rem] font-[700] w-[100rem] max-md:mb-[3rem] max-md:text-[2rem] max-md:w-full">
              Територія україномовного осередку на Афоні складає 1,6 ГА або ж приблизно 16000 кв.м. та знаходиться у закинутому і зарослому хащами стані.
            </div>
            <div className="text-[3rem] text-center font-playfair mb-[2rem] max-md:text-[2rem] max-md:mb-[1rem]">
              Обери розмір території відновлення щоб підтримати та привести до ладу.
            </div>
            <div className="text-[3rem] text-center font-playfair mb-[2rem] max-md:text-[2rem] max-md:mb-[1rem]">
              Всі кошти поступають виключно на рахунок БФ “Святих Архангелів” ПЦУ, що опікується відбудовою.
            </div>
            <div className="text-[3rem] text-center font-playfair mb-[2rem] max-md:text-[2rem] max-md:mb-[1rem]">
              Вкажи тел та e-mail і ми надішлемо вам сертифікат опікуна “ГОРА” на Афоні на знак подяки та пам’ятний сувенір.
            </div>
            <div className="text-[3rem] text-center font-playfair mb-[2rem] max-md:text-[2rem] max-md:mb-[1rem]">
              Щороку виходитиме том з усіма опікунами “ГОРИ” (Ваше фото та коротка інформація про вас) зберігатиметься у відбудованому осередку. Так буде створено бібліотеку відбудовників на Афоні, а копія такого тому також буде у вас.
            </div>
            <div className="text-[3rem] text-center font-playfair mb-[2rem] max-md:text-[2rem] max-md:mb-[1rem]">
              Наразі на Афоні працює Сергій Шумило, історик та дослідник Міжнародного інституту афонської спадщини України ні Афоні (посилання на його  <Link className="inline text-regal-beige text-[3rem] font-[700] font-playfair max-md:text-[2rem]" href='https://www.facebook.com/shumylo'>Facebook</Link>, який знаходить десятки архівних книг, що засвідчують фінансову підтримку запорізьких козаків у будівництві скитів та келій.
            </div>
            <div className="text-[4rem] text-center font-playfair mb-[2rem] text-regal-beige max-md:text-[2.5rem] max-md:mb-[1rem]">
              Давайте продовжувати традицію наших предків!
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
