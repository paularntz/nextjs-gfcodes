"use client"
import { useSearchParams } from 'next/navigation'
import SearchList from '@/components/SearchList';

export default function SearchResults() {
    const searchParams = useSearchParams()
    const sstr = searchParams.get('sstr');
  return (
    <SearchList sstr={sstr} />
  )
}
