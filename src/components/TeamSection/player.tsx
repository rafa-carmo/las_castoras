import { type AnimationControls, motion } from 'framer-motion'

interface PlayerInfoProps {
  name: string
  image: string
  assoc?: string
  controls: AnimationControls
}

export function PlayerInfo({ name, image, assoc, controls }: PlayerInfoProps) {
  return (
    <>
      <div className="flex-1 ">
        <motion.img
          initial="visible"
          animate={controls}
          variants={{
            hidden: {
              opacity: 0,
              x: -400,
              transition: {
                duration: 0.5,
              },
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
              },
            },
          }}
          src={image}
          alt={name}
          className="object-cover md:object-contain w-full md:h-full h-64 shadow-filter relative z-0"
        />
      </div>

      <motion.div
        className="flex-1 relative z-10 md:pointer-events-auto pointer-events-none"
        initial="visible"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            x: 400,
            transition: {
              duration: 0.5,
            },
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.7,
            },
          },
        }}
      >
        <div className="flex flex-col space-y-5 w-fit max-w-xl">
          <div className="flex flex-col items-center w-fit">
            <h3 className=" text-6xl md:text-8xl font-bold font-hero text-primary-500 text-center">
              {name}
            </h3>
            <h4 className="text-2xl font-bold font-hero">{assoc}</h4>
          </div>
          <hr className="border border-black" />
          <div>
            <h4 className="text-2xl font-bold text-center">Posição</h4>
          </div>
        </div>
      </motion.div>
    </>
  )
}
