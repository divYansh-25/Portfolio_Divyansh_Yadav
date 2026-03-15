function ThemeSwitcher() {

  const changeTheme = (theme) => {
    document.body.className = theme
    localStorage.setItem("theme", theme)
  }

  return (
    <div className="flex gap-2 ml-4">

      <button onClick={() => changeTheme("")} className="w-4 h-4 rounded-full bg-red-600"/>

      <button onClick={() => changeTheme("theme-blue")} className="w-4 h-4 rounded-full bg-blue-500"/>

      <button onClick={() => changeTheme("theme-purple")} className="w-4 h-4 rounded-full bg-purple-500"/>

      <button onClick={() => changeTheme("theme-green")} className="w-4 h-4 rounded-full bg-green-500"/>

      <button onClick={() => changeTheme("theme-gold")} className="w-4 h-4 rounded-full bg-yellow-500"/>

    </div>
  )
}

export default ThemeSwitcher