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

export default function HeaderPage() {
    const categorias = useAppSelector(state => state.categorias.data)
    const dispatch = useAppDispatch()
    //menu categorias
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        dispatch(getCategorias())
    }, [dispatch])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const mostrarCategoria = (id: string , name: string) => {
        setAnchorEl(null);
        // enviar id
        dispatch(getCategoriasId(id))
        dispatch(setNameCategoria(name))
    };


  return (
    <header className="w-full h-[100px] bg-[#FFF159]">
      <div className="w-[62%] pt-2 mx-auto flex items-center justify-between">
          <img src={logo} width={140} height={140} alt=""/>
          <div className="w-4/5 relative flex items-center justify-center">
            <input 
              type="text" 
              placeholder="Buscar productos,marcas y más..."
              className="w-4/5 py-2 px-3 rounded shadow"
            />
            <img src={search} width={25} height={25} alt="" className="absolute right-20"/>
          </div>
          <img src={disneyHeader} width={335} height={40} alt=""/>
      </div>
      <div className="w-[62%] pt-2 mx-auto flex items-center justify-between gap-10">
        <div className="flex items-start gap-2">
          <img src={location} width={18} height={18} alt=""/>
          <div>
            <p className="text-xs">Enviar a</p>
            <p className="text-xs">Capital Federal 1425</p>
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
          <li className="cursor-pointer">CREA TU CUENTA</li>
          <li className="cursor-pointer">INGRESA</li>
          <li className="cursor-pointer">MIS COMPRAS</li>
          <button>

          </button>
        </ul>
      </div>
    </header>
  )
}