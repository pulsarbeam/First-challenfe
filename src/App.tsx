import signUp from '/images/illustration-sign-up-desktop.svg'
import check from '/images/icon-success.svg'

const App = () => {
  return (
    <div>
      <main className="bg-[#36384d] w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="bg-white  rounded-3xl shadow-xl flex max-w-[55rem]">
          <div className="py-20 px-4 mx-10">
            <div className="flex flex-col gap-5 ">
              <h1 className="font-bold text-5xl text-[#232742]">
                Stay updated!
              </h1>
              <h2>
                Join 60,000+ product managers receiving monthly updates on:
              </h2>
              <ul className="flex flex-col text-sm gap-2">
                <li className="flex flex-row gap-5 ">
                  {' '}
                  <img src={check} className="w-5 h-5" /> Product discovery and
                  building what matters
                </li>
                <li className="flex flex-row gap-5">
                  {' '}
                  <img src={check} className="w-5 h-5" /> Measuring to ensure
                  updates are a success
                </li>
                <li className="flex flex-row gap-5">
                  {' '}
                  <img src={check} className="w-5 h-5" /> And much more!
                </li>
              </ul>
            </div>
            <form className="flex flex-col gap-4 mt-8">
              <label htmlFor="email" className="font-bold text-gray-800">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded-md px-4 py-2"
                placeholder="email@company.com"
              />
              <button
                type="submit"
                className="bg-[#232742] text-white font-bold py-4 rounded-lg"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <img src={signUp} alt="Sign up" className="py-4 pr-6 w-96" />
        </div>
      </main>
    </div>
  )
}
export default App
