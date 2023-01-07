import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";

type Props = {
    onClick: () => void,
};

const RegisterButton = ({ onClick }: Props) =>
    <Button
        variant="contained"
        sx={{ position: 'absolute', bottom: 50, left: 100, borderRadius: 28 }}
        onClick={onClick}>
        <AddIcon />登録
    </Button>;

export default RegisterButton;