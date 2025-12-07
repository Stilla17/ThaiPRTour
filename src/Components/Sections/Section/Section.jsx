import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'framer-motion';
import { motion, AnimatePresence } from "framer-motion";
import './section.css';

function Section() {
  const numberRef = useRef(null);
  const numberRef1 = useRef(null);
  const numberRef2 = useRef(null);
  const numberRef3 = useRef(null);

  const [page, setPage] = useState("pas1");

  const PageWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );

  const motionVariants = () => {
    animate(0, 200, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (value) => {
        numberRef.current.textContent = Math.round(value) + '+';
      },
    });

    animate(0, 350, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (value) => {
        numberRef1.current.textContent = Math.round(value) + '+';
      },
    });

    animate(0, 1200, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (value) => {
        numberRef2.current.textContent = Math.round(value) + '+';
      },
    });

    animate(0, 80, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (value) => {
        numberRef3.current.textContent = Math.round(value) + '+';
      },
    });
  };

  useEffect(() => {
    motionVariants();
  }, []);

  return (
    <>
      <section>
        <div className="countener">
          <div className="why-we">
            <div className="fle">
              <p className="wh">Почему Animal.PRO</p>

              <div className="q1">
                <p className="number" ref={numberRef}>0+</p>
                <p className="number-p">Продано животных</p>
              </div>

              <div className="q1">
                <p className="number" ref={numberRef1}>0+</p>
                <p className="number-p">Оказано услуг по уходу</p>
              </div>

              <div className="q1">
                <p className="number" ref={numberRef2}>0+</p>
                <p className="number-p">Найдено пропавших животных</p>
              </div>

              <div className="q1">
                <p className="number" ref={numberRef3}>0+</p>
                <p className="number-p">Животных сдано в аренду</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="countener">
          <div className="about">
            <div className="about-inner">

              <div className='aas'>
                <button onClick={() => setPage("pas1")}>Купить животное</button>
                <button onClick={() => setPage("pas2")}>Продать животное</button>
                <button onClick={() => setPage("pas3")}>Аренда животных</button>
                <button onClick={() => setPage("pas4")}>Услуги</button>
                <button onClick={() => setPage("pas5")}>Пропавшие животные</button>
                <button onClick={() => setPage("pas6")}>Ветеринария</button>
              </div>

              <div className="page-wrapper">
                <AnimatePresence mode="wait">

                  {page === "pas1" && (
                    <PageWrapper key="pa1">
                      <h1>Покупка животных</h1>
                      <p>Вы можете купить породистых, домашних и экзотических животных.</p>
                    </PageWrapper>
                  )}

                  {page === "pas2" && (
                    <PageWrapper key="pa2">
                      <h1>Продажа животных</h1>
                      <p>Разместите объявление и найдите покупателей быстро.</p>
                    </PageWrapper>
                  )}

                  {page === "pas3" && (
                    <PageWrapper key="pa3">
                      <h1>Аренда животных</h1>
                      <p>Аренда для мероприятий, фотосессий и обучения.</p>
                    </PageWrapper>
                  )}

                  {page === "pas4" && (
                    <PageWrapper key="pa4">
                      <h1>Услуги для животных</h1>
                      <p>Груминг, передержка, обучение, перевозка и многое другое.</p>
                    </PageWrapper>
                  )}

                  {page === "pas5" && (
                    <PageWrapper key="pa5">
                      <h1>Пропавшие животные</h1>
                      <p>Раздел для поиска и возврата потерянных питомцев.</p>
                    </PageWrapper>
                  )}

                  {page === "pas6" && (
                    <PageWrapper key="pa6">
                      <h1>Ветеринария</h1>
                      <p>Онлайн консультации, помощь и проверка здоровья животных.</p>
                    </PageWrapper>
                  )}

                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
