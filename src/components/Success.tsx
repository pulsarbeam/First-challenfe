import check from '/images/icon-success.svg'

const Success = ({ email }: { email: string }) => {
  console.log(email)
  const handleSudmit = () => {
    window.location.reload()
  }

  return (
    <div>
      <main className="bg-[#36384d] w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="bg-white  rounded-3xl shadow-xl flex max-w-[27rem]">
          <div className="py-10 px-4 mx-10">
            <div className="flex flex-col gap-5 ">
              <img src={check} className="w-16 h-16" />
              <h1 className="font-bold text-5xl text-[#232742]">
                Thanks for subscribing!
              </h1>

              <p>
                A confirmation email has been sent to <strong>{email}</strong>.
                Please open it and click the button inside to confirm your
                subscription
              </p>
              <button
                onClick={() => {
                  handleSudmit()
                }}
                className="bg-[#232742] text-white font-bold py-4 rounded-lg text-xs mt-4  hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 "
              >
                Dismiss Message
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Success
