import { Container } from "@/components/shared/container";

export default function Project() {
  return (
    <>
      <section className="max-w-full grow">
        <Container className="py-[10rem] max-md:py-[5rem]">
          <h1 className="text-[10rem] text-center text-regal-beige font-spectral font-[700] uppercase mb-[4rem] max-md:mb-[3rem] max-md:text-[3.2rem]">
            Гора
          </h1>
          <div className="text-[4rem] text-center font-spectral mb-[4rem] w-[120rem] mx-auto max-md:text-[2.5rem] max-md:w-full">
            Громадська опікунська рада Афону (скор. ГОРА) – це спільнота відповідальних людей (опікунів), які своїм грошовим внеском беруть опікунство над україномовним осередком на 2025 рік. Таке опікунство допоможе відбудові та в майбутньому формувати бюджет його життєдіяльності на кожен рік наперед.
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-[10rem] max-md:py-[5rem]">
          <h2 className='text-[7rem] text-center text-regal-beige font-spectral font-[700] uppercase mb-[4rem] max-md:mb-[3rem] max-md:text-[3rem]'>
            Відбудований осередок створить:
          </h2>
          <ul className="building-list flex flex-col justify-start items-start text-[3rem] font-playfair font-[500] uppercase mx-auto gap-[1rem] w-[140rem] max-md:w-full max-md:text-[1.5rem]">
            <li >безкоштовне проживання та харчування всім паломникам;</li>
            <li >безкоштовний трансфер на півострів Афон усім військовим; </li>
            <li >безкоштовну духовно-психологічну реабілітацію ветеранам на Афоні;</li>
            <li >відродить та продовжить українську духовну спадщину на Афоні;</li>
            <li >місце сили України на Святій землі та щоденну молитву за українців та мир.</li>
          </ul>
        </Container>
      </section>
      <section>
        <Container className="py-[10rem] max-md:py-[5rem]">
          <h2 className='text-[7rem] text-center text-regal-beige font-spectral font-[700] uppercase mb-[4rem] max-md:mb-[3rem] max-md:text-[2rem]'>
            Фото металевої мапи
          </h2>
          <div className="building-list flex flex-col justify-start text-center items-center text-[3rem] font-playfair font-[500] mx-auto w-[120rem] gap-[1rem] max-md:text-[2rem] max-md:w-full">
            В подальшому у відбудованому осередку ця карта території з усіма опікунами буде роздрукована на металі та розміщена у вітальному холі паломницького будинку із зазначенням вашого прізвища та кількості пікселів українського осередку, опіку над якими ви обрали із позначенням їх на цій карті із вашим порядковим номером. Тільки уявіть собі, колись ваш син чи родич приїде на Афон та знайде своє родове прізвище серед Афонських відбудовників! Все, як колись за часів Запорізької Січі! Та якщо раніше відбудовниками були лише гетьмани чи отамани, то тепер можемо бути ми з вами, кожен з вас допоки є вільне місце!
          </div>
        </Container>
      </section>
    </>
  );
}
