import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/start'
import { getUser as getUserAction } from '~/utils/action'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {

    const getUser = useServerFn(getUserAction)

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => getUser()}>Get User</button>
    </div>
  )
}
