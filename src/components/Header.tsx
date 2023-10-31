import logo from "../assets/logo.png"
import disneyHeader from "../assets/disneyHeader.png"
import search from "../assets/search.svg"
import location from "../assets/location.png"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import React, { useEffect, useState } from "react"
import { getCategorias, getCategoriasId, setNameCategoria } from "../redux/slices/categoriasSlice"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, Outlet, useNavigate } from "react-router-dom"
import carrito from "../assets/cart.svg"

export default function HeaderPage() {
    const categorias = useAppSelector(state => state.categorias.data)
    const [ busqueda, setBusqueda ] = useState<string>('')
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    //menu categorias
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        dispatch(getCategorias())
    }, [])
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const mostrarCategoria = (id: string , name: string) => {
        setAnchorEl(null);
        navigate('/')
        // enviar id
        dispatch(getCategoriasId(id))
        dispatch(setNameCategoria(name))
    };
    const handleSubmit = (e: any) => {
      e.preventDefault()
      if(busqueda.length > 0) {
        navigate(`/${busqueda}`)
      }
      setBusqueda('')
    }

  return (
    <>
      <header className="w-full h-[100px] bg-[#FFF159] flex flex-col justify-between py-2">
        <div className="w-[70%] 2xl:w-[65%] flex mx-auto justify-between">
          <Link to='/'>
            <img src={logo} width={180} height={180} alt=""/>
          </Link>
              <form onSubmit={handleSubmit} className="w-4/5 relative flex items-center justify-center">
                <input 
                  type="text" 
                  placeholder="Buscar productos,marcas y más..."
                  className="w-4/5 py-2 px-3 rounded shadow"
                  onChange={(e) => setBusqueda(e.target.value)}
                  value={busqueda}
                  />
                <button
                  type="submit"
                  className="absolute right-20"
                >
                  <img src={search} width={25} height={25} alt="" />
                </button>
              </form>
            <img src={disneyHeader} width={335} height={40} alt=""/>
        </div>
        <div className="xl:w-[70%] 2xl:w-[65%] mx-auto flex items-center justify-around gap-10">
          <div className="flex items-start xl:gap-2">
            <img src={location} width={18} height={18} alt=""/>
            <div className="text-xs">
              <p>Enviar a</p>
              <p>San Juan 5400</p>
            </div>
          </div>
          <nav className="flex list-none gap-5 items-center pt-2 text-xs">
              <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ fontSize: '12px', color: "#000", padding: 0}}
            >
                Categorias
                <KeyboardArrowDownIcon/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                { categorias.slice(0, 20).map( categoria => (
                    <MenuItem key={categoria.id} onClick={() => mostrarCategoria(categoria.id, categoria.name)}>{categoria.name}</MenuItem>
                ))}
            </Menu>
            <li className="cursor-pointer">OFERTAS</li>
            <li className="cursor-pointer">HISTORIAL</li>
            <li className="cursor-pointer">SUPERMERCADO</li>
            <li className="cursor-pointer">MODA</li>
            <li className="cursor-pointer">VENDER</li>
            <li className="cursor-pointer">AYUDA</li>
          </nav>
          <ul className="flex list-none gap-5 items-center pt-2 text-xs">
            <li className="cursor-pointer">MIS COMPRAS</li>
            <li className="cursor-pointer">CREA TU CUENTA</li>
            <li className="cursor-pointer">INGRESA</li>
            <Link to='/carrito'>
              <img src={carrito} width={20} alt="" />
            </Link>
          </ul>
        </div>
      </header>
      
      <main>
        <Outlet/>
      </main>
    </>
  )
}