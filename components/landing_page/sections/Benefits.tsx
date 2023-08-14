export default function Benefits() {
  return (
    <section>
      <h1 className="text-center w-full my-10 text-4xl font-bold">Benefits</h1>
      <div>
          {/* Benefit 1 */}
          <section className="flex flex-row-reverse">
            <div className="w-1/2 m-4">
              <img src="./landing_page/sections/benefits/pic_1.jpeg"/>
            </div>
            <section className="w-1/2 m-4">
              <h1>Heading 1</h1>
              <p>Para 1</p>
            </section>
          </section>

          {/* Benefit 2 */}
          <section className="flex">
            <div className="w-1/2 m-4">
              <img src="./landing_page/sections/benefits/pic_2.jpeg"/>
            </div>
            <section className="w-1/2 m-4">
              <h1>Heading 2</h1>
              <p>Para 2</p>
            </section>
          </section>

          {/* Benefit 3 */}
          <section className="flex flex-row-reverse">
            <div className="w-1/2 m-4">
              <img src="./landing_page/sections/benefits/pic_3.jpeg"/>
            </div>
            <section className="w-1/2 m-4">
              <h1>Heading 3</h1>
              <p>Para 3</p>
            </section>
          </section>

          {/* Benefit 4 */}
          <section className="flex">
            <div className="w-1/2 m-4">
              <img src="./landing_page/sections/benefits/pic_4.jpeg"/>
            </div>
            <section className="w-1/2 m-4">
              <h1>Heading 4</h1>
              <p>Para 4</p>
            </section>
          </section>

      </div>
    </section>
  )
}