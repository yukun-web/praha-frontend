function Sidemenu() {
  return (
    <div className="h-full bg-blue-600">
      <ul>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-full bg-red-600">
      <p>僕はメインコンテンツだよ</p>
    </div>
  );
}

const Layout = () => {
  return (
    <div className="flex">
      <div className="basis-[300px]">
        <Sidemenu />
      </div>
      <div className="flex-1">
        <MainContent />
      </div>
    </div>
  )
}

export default {
  component: Layout,
}

export const Basic = {}