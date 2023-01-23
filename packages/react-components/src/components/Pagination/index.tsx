import { StyledButton, StyledButtonsContainer, StyledPaginationContainer, StyledPaginationDataInfo } from "./styes";

interface PaginationData {
  pageSize: number;
  pageNumber: number;
  totalRegisters: number;
  startRegister: number;
  endRegister: number;
  totalPages: number;
}

export interface PaginationProps {
  data: PaginationData;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export function Pagination({
  data,
  onPreviousPage,
  onNextPage,
}: PaginationProps) {
  const { startRegister, endRegister, totalRegisters, pageNumber, totalPages } =
    data;

  return (
    <StyledPaginationContainer
      aria-label="Pagination"
    >
      <StyledPaginationDataInfo aria-label="PaginationDataContainer">
        <p>
          Exibindo <span>{startRegister}</span> até{" "}
          <span>{endRegister}</span> de{" "}
          <span>{totalRegisters}</span> registros
        </p>
      </StyledPaginationDataInfo>
      <StyledButtonsContainer>
        <StyledButton
          disabled={pageNumber === 1}
          onClick={onPreviousPage}
          aria-label="PreviousPageButton"
        >
          Anterior
        </StyledButton>
        <StyledButton
          css={{marginLeft: "$3"}}
          disabled={pageNumber === totalPages}
          onClick={onNextPage}
          aria-label="NextPageButton"
        >
          Próximo
        </StyledButton>
      </StyledButtonsContainer>
    </StyledPaginationContainer>
  );
}

Pagination.displayName = "Pagination"