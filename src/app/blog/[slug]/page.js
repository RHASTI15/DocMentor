 
// export default function user() {
//   const router = useRouter()
//   console.log("hello");
//   return <p>Post: {router.query.user}</p>
// }

export default async function user({ params }) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}
