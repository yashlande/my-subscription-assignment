import React from "react";
import { useHistory } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { withRouter } from "react-router-dom";

function Breadcrumb(props) {

    const { history, location: { pathname } } = props;
    // console.log("Pathname - ", pathname);
    const pathnames = pathname.split("/").filter(x => x);
    return (
        <div>
            <Breadcrumbs separator=">" aria-label="breadcrumb">
                <Link onClick={() => history.push("/")}>Subscriptions</Link>
                {
                    pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                        const isLast = index === pathnames.length - 1;
                        return (
                            isLast ? <Typography key={name}>{name}</Typography> : <Link key={name} onClick={() => history.push(routeTo)}>{name}</Link>
                        )
                    })
                }
            </Breadcrumbs>
        </div>
    )
}

export default withRouter(Breadcrumb);