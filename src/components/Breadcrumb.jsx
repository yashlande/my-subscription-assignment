import React from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumbs, Link } from "@mui/material";

function Breadcrumb() {

    const history=useHistory()

    return (
        <div
            style={{
                // margin: "auto",
                display: "table",
            }}
        >
            <Breadcrumbs separator=">" aria-label="breadcrumb">
                <Link
                    color="inherit"
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        history.push("/")
                    }}
                >
                    Subscriptions
                </Link>
                <Link
                    color="inherit"
                    href="/addnew"
                    onClick={(event) => {
                        event.preventDefault();
                    }}
                >
                    Add
                </Link>
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb