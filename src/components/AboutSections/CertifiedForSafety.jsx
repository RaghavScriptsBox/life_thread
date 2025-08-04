import { Box, Typography } from '@mui/material'
import React from 'react'
import Atira from '../../Assets/Atira.png'
import GMP from "../../Assets/GMP.png"
import Iso9001 from "../../Assets/ISO9001.png"
import ISO13485 from "../../Assets/ISO13485.png"

const CertifiedForSafety = () => {
    return (
        <Box sx={{
            textAlign: 'center',
            mb: 4,
            height: "100%",
            minHeight: "50vh",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <Box>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '24px', md: '40px' },
                    mb: 2,
                    fontFamily: 'Figtree, sans-serif',
                    color: '#005A69'
                }}>Certified for Safety, Quality & Compliance</Typography>
            </Box>
            <Box sx={{ mt: "40px", display: { xs: "block", md: "flex" }, gap: "20px", justifyContent: "center", alignItems: "center" }}>
                <img src={Iso9001} alt="ISO 9001 Certification" style={{
                    width: '100px',
                    height: 'auto',
                    margin: '0 10px'
                }} />
                <img src={ISO13485} alt="ISO 13485 Certification" style={{
                    width: '100px',
                    height: 'auto',
                    margin: '0 10px'
                }} />
                <img src={Atira} alt="Atira Certification"
                    style={{
                        width: '100px',
                        height: 'auto',
                        margin: '0 10px'
                    }}
                />
                <img src={GMP} alt="GMP Certification" style={{
                    width: '100px',
                    height: 'auto',
                    margin: '0 10px'
                }} />

            </Box>
        </Box>
    )
}

export default CertifiedForSafety