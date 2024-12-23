const generateImageUrl = ({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) => {
  return `https://res.cloudinary.com/derqq1zks/image/upload/${option}/v1734963157/${format}/${filename}.${format}`
}

export default generateImageUrl
