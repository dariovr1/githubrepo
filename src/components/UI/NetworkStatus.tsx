import React from "react";
import { Box, Alert, CircularProgress } from "@mui/material";
interface NetworkErrorProps {
  loading: boolean;
  errorMessage: string;
  error: boolean;
  children: React.ReactNode;
}

const NetworkStatus: React.FC<NetworkErrorProps> = ({
  loading,
  errorMessage,
  error,
  children,
}) => {
  if (loading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height={"100%"}
        flexGrow={1}
      >
        <CircularProgress data-testid="spinner" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ width: "100%" }}>
        {errorMessage}
      </Alert>
    );
  }

  return <>{children}</>;
};

export default NetworkStatus;
