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
    animate(0, 20, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (value) => {
        numberRef.current.textContent = Math.round(value) + '+';
      },
    });

    animate(0, 100, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (value) => {
        numberRef1.current.textContent = Math.round(value) + '+';
      },
    });

    animate(0, 400, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (value) => {
        numberRef2.current.textContent = Math.round(value) + '+';
      },
    });

    animate(0, 12, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (value) => {
        numberRef3.current.textContent = Math.round(value) + '+';
      },
    });
  }

  useEffect(() => {
    motionVariants();
  }, []);



  return (
    <>
      <section>
        <div className="countener">
          <div className="why-we">
            <div className="fle">
              <p className="wh">Почему Thai.PRO</p>

              <div className="q1">
                <p className="number" ref={numberRef}>0+</p>
                <p className="number-p">Оформлено гражданств</p>
              </div>

              <div className="q1">
                <p className="number" ref={numberRef1}>0+</p>
                <p className="number-p">Помогли открыть бизнес</p>
              </div>

              <div className="q1">
                <p className="number" ref={numberRef2}>0+</p>
                <p className="number-p">Помогли в выдаче виз</p>
              </div>

              <div className="q1">
                <p className="number" ref={numberRef3}>0+</p>
                <p className="number-p">Оформили недвижимость</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="countener">
          <div className="about">
            <div className="about-inner">

              <div className='aas' >
                <button onClick={() => setPage("pas1")}>гражданств ЕС</button>
                <button onClick={() => setPage("pas2")}>Карта поляка</button>
                <button onClick={() => setPage("pas3")}>Паспорт  ЕС</button>
                <button onClick={() => setPage("pas4")}>ВНЖ</button>
                <button onClick={() => setPage("pas5")}>ПМЖ</button>
                <button onClick={() => setPage("pas6")}>Бизнес</button>
              </div>

              <div className="page-wrapper">
                <AnimatePresence mode="wait">

                  {page === "pas1" && (
                    <PageWrapper key="pa1">
                      <h1>гражданств ЕС</h1>
                    </PageWrapper>
                  )}

                  {page === "pas2" && (
                    <PageWrapper key="pa2">
                      <h1>дльв</h1>
                    </PageWrapper>
                  )}

                  {page === "pas3" && (
                    <PageWrapper key="pa3">
                      <h1>Паспорт  ЕС</h1>
                    </PageWrapper>
                  )}

                  {page === "pas4" && (
                    <PageWrapper key="pa4">
                      <h1>двц</h1>
                    </PageWrapper>
                  )}
                  {page === "pas5" && (
                    <PageWrapper key="pa5">
                      <h1>двц</h1>
                    </PageWrapper>
                  )}
                  {page === "pas6" && (
                    <PageWrapper key="pa6">
                      <h1>двц</h1>
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
