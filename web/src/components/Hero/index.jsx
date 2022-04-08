import BlockContent from "@sanity/block-content-to-react"
import Image from "next/image"

import { urlForImage } from "../../libs/sanity"
import HeroLinks from "./HeroLinks"

function Hero({ data }) {
  const { photo, social_links: links, content } = data
  const photoURl = photo ? urlForImage(photo).url() : null
  const photoAlt = photo ? photo.photo_alt : null

  const overrides = {
    h1: (props) => (
      // eslint-disable-next-line jsx-a11y/heading-has-content
      <h1 className="h1 my-8" {...props} />
    ),
    subTitle: (props) => <p className="text-xl" {...props} />,
    normal: (props) => (
      <p className="text-lg text-gray-800 dark:text-gray-300" {...props} />
    ),
  }

  const serializers = {
    types: {
      block: (props) =>
        overrides[props.node.style]
          ? overrides[props.node.style]({ children: props.children })
          : BlockContent.defaultSerializers.types.block(props),
    },
  }

  return (
    <section className="bg-yellow-400 py-24 mt-24 sm:mt-36 dark:bg-gray-800">
      <div className="flex flex-col items-center max-w-screen-sm mx-auto px-8 sm:flex-row">
        <div className="w-full text-center sm:w-3/5 sm:text-left sm-down:mt-12 sm-down:order-2 sm:mr-12">
          <BlockContent blocks={content} serializers={serializers} />
          <HeroLinks links={links} />
        </div>

        {photo ? (
          <div className="text-center w-full max-w-md sm:max-w-none sm:w-2/5">
            <div className="relative flex overflow-hidden w-full rounded-full border-4 border-gray-900 bg-white pb-full shadow-xl dark:border-gray-100">
              <Image
                src={photoURl}
                alt={photoAlt}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Hero
