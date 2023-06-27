import check from '/images/icon-success.svg'

const Success = ({ email }: { email: string }) => {
  console.log(email)
  const handleSudmit = () => {
    window.location.reload()
  }

  return (
    <div>
      <main className="md:bg-[#36384d] md:w-[100vw] md:h-[100vh] flex justify-center items-center ">
        <div className="bg-white  md:rounded-3xl md:shadow-xl flex md:max-w-[27rem] pt-24 lg:pt-0">
          <div className="py-10 px-4 mx-10">
            <div className="flex flex-col md:gap-5 gap-10">
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
                className="bg-[#232742] w-80  text-white font-bold py-4 rounded-lg text-xs lg:mt-4 mt-32 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 "
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
