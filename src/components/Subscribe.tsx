import signUp from '/images/illustration-sign-up-desktop.svg'
import check from '/images/icon-success.svg'
import { SetStateAction, useState } from 'react'
import Success from './Success'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (!email) {
      setErrorMessage('Please enter an email address.')
      setIsValid(false)
    } else if (!validateEmail(email)) {
      setErrorMessage('Valid email requierd.')
      setIsValid(false)
    } else {
      // Perform your desired action on successful form submission
      setIsValid(true)
      setErrorMessage('')

      setSubmitted(true)
    }
  }

  const validateEmail = (email: string) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  return !submitted ? (
    <div>
      <main className="bg-[#36384d] w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="bg-white  rounded-3xl shadow-xl max-w-[55rem] lg:flex md:flex sm:grid grid-cols-2">
          <img
            src={signUp}
            alt="Sign up"
            className=" lg:pr-6 md:pr-6 w-96  my-10 order-last"
          />
          <div className="lg:py-28 sm:px-4 mx-10">
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
            <form
              className="flex flex-col gap-3 mt-8 mb-8 lg:mb-0"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="font-bold text-gray-800 text-xs"
                >
                  Email address
                </label>
                {!isValid && (
                  <p className="text-red-500 text-xs font-bold">
                    {errorMessage}
                  </p>
                )}
              </div>
              <input
                type="message"
                name="email"
                id="email"
                className={`border rounded-md px-4 py-3 ${
                  !isValid
                    ? 'border-red-300 bg-red-100 text-red-400'
                    : 'border-gray-300'
                }`}
                placeholder="email@company.com"
                value={email}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="bg-[#232742] text-white font-bold py-4 rounded-lg text-sm mt-4 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  ) : (
    <Success email={email} />
  )
}
export default Subscribe
