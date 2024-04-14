import { useCallback, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { pokemonService } from "@services/pokemon";
import { IPokemonList } from "@shared/interfaces/pokemon.interface";

interface IListPagination {
  offset: number;
  limit: number;
}

export function usePokemonList() {
  const [pagination, setPagination] = useState<IListPagination>({
    offset: 0,
    limit: 20,
  });

  const [pageNumber, setPageNumber] = useState<number>(0);

  const listQuery = useQuery<IPokemonList>({
    queryKey: ["pokemon-list", pagination.offset, pagination.limit],
    queryFn: () =>
      pokemonService.getPaginatedPokemonList(
        pagination.offset,
        pagination.limit
      ),
    placeholderData: keepPreviousData,
  });

  const handleNextPage = useCallback(() => {
    if (!listQuery?.data?.next) return;

    const nextPageUrl = new URL(listQuery.data.next);

    const searchParams = new URLSearchParams(nextPageUrl.search);

    const nextPage = {
      offset: Number(searchParams.get("offset") ?? 0),
      limit: Number(searchParams.get("limit") ?? 20),
    };

    setPagination(nextPage);
    setPageNumber((currPage) => currPage + 1);
  }, [listQuery.data]);

  const handlePreviousPage = useCallback(() => {
    if (!listQuery?.data?.previous) return;

    const previousPageUrl = new URL(listQuery.data.previous);

    const searchParams = new URLSearchParams(previousPageUrl.search);

    const previousPage = {
      offset: Number(searchParams.get("offset") ?? 0),
      limit: Number(searchParams.get("limit") ?? 20),
    };

    setPagination((prevState) => {
      if (prevState.offset === 0) return prevState;
      return previousPage;
    });
    setPageNumber((currPage) => {
      if (currPage === 0) return 0;
      return currPage - 1;
    });
  }, [listQuery.data]);

  return {
    ...listQuery,
    pageNumber,
    isMockedData: Boolean(listQuery?.isPlaceholderData),
    handleNextPage,
    handlePreviousPage,
  };
}
