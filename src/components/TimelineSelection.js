import { Grid, makeStyles, Typography, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSentinelDate } from "../actions/sentinelDateActions";

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function TimelineSelection() {
    const sentinelHubLayer = useSelector((state) => state.sentinelHubLayer);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {}, []);

    return sentinelHubLayer ? (
        <div style={{ marginTop: 20 }}>
            <Grid item container direction="column">
                <Grid item md={12}>
                    <Typography>Timeline</Typography>
                </Grid>
                <Grid item md={12}>
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <TextField
                                id="start-date"
                                label="Start Date"
                                type="date"
                                onChange={(e) => {
                                    dispatch(
                                        setSentinelDate({
                                            startDate: e.target.value,
                                        })
                                    );
                                }}
                                style={{ width: "100%" }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <TextField
                                id="end-date"
                                label="End Date"
                                type="date"
                                onChange={(e) => {
                                    dispatch(
                                        setSentinelDate({
                                            endDate: e.target.value,
                                        })
                                    );
                                }}
                                style={{ width: "100%" }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    ) : (
        ""
    );
}

export default TimelineSelection;
